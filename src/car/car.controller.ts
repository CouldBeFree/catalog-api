import { Controller, Get, Query, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.interface';

@Controller('cars')
export class CarController {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}

  @Get()
  async getCars(
    @Query() queries: Record<string, any>,
    @Query('page') page: number = 1,
    @Query('name') name?: string[] | string,
    @Query('model') model?: string[] | string,
    @Query('engine') engine?: string[],
    @Query('priceMin') priceMin?: number,
    @Query('priceMax') priceMax?: number,
    @Query('mileageMin') mileageMin?: number,
    @Query('mileageMax') mileageMax?: number,
  ): Promise<{ data: Car[]; meta: any }> {
    const limit = 9;
    const skip = (page - 1) * limit;

    type MongoFilters = {
      [K in keyof Car]?: {
        $in?: any[];
        $gte?: number;
        $lte?: number;
      };
    };

    const filters: MongoFilters = {};

    const normalize = (
      v: string[] | string | undefined,
    ): string[] | undefined => {
      if (!v) return undefined;
      return Array.isArray(v) ? v : [v];
    };

    const nameArray = normalize(name);
    const modelArray = normalize(model);
    const engineArray = normalize(engine);

    if (nameArray)
      filters.name = { $in: nameArray.map((n) => new RegExp(n, 'i')) };
    if (modelArray) filters.model = { $in: modelArray };
    if (engineArray) filters.engine = { $in: engineArray };

    if (priceMin !== undefined || priceMax !== undefined) {
      filters.price = {};
      if (priceMin !== undefined) filters.price.$gte = priceMin;
      if (priceMax !== undefined) filters.price.$lte = priceMax;
    }

    if (mileageMin !== undefined || mileageMax !== undefined) {
      filters.mileage = {};
      if (mileageMin !== undefined) filters.mileage.$gte = mileageMin;
      if (mileageMax !== undefined) filters.mileage.$lte = mileageMax;
    }

    const cars = await this.carModel
      .find(filters)
      .skip(skip)
      .limit(limit)
      .exec();
    const total = await this.carModel.countDocuments(filters);
    const meta = {
      currentPage: page,
      total,
      pages: Math.ceil(total / limit),
    };

    return { data: cars, meta };
  }

  @Get(':id')
  async getCarById(@Param('id') id: string): Promise<Car | null> {
    return this.carModel.findById(id).exec();
  }
}
