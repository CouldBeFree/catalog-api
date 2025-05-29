import { connect } from 'mongoose';

const cars = [
  {
    name: 'BMW',
    model: 'F30',
    engine: 'diesiel',
    year: 2018,
    color: 'Black',
    price: 35000,
    mileage: 30000,
    image:
      'https://prestigeandperformancecar.com/wp-content/uploads/3-Series-F30-5-1240x775.jpg',
  },
  {
    name: 'Audi',
    model: 'A4',
    engine: 'gasoline',
    year: 2019,
    color: 'White',
    price: 37000,
    mileage: 25000,
    image: 'https://audi.autoua.net/media/catalog/9/3/p1763493-1582023386.jpg',
  },
  {
    name: 'Mercedes',
    model: 'C-Class',
    engine: 'gasoline',
    year: 2020,
    color: 'Silver',
    price: 40000,
    mileage: 20000,
    image:
      'https://parkers-images.bauersecure.com/wp-images/22257/cut-out/1200x800/mercedes-c-class.jpg?mode=max&quality=90&scale=down',
  },
  {
    name: 'Tesla',
    model: 'Model 3',
    engine: 'electric',
    year: 2021,
    color: 'Red',
    price: 45000,
    mileage: 15000,
    image: 'https://i.infocar.ua/i/12/6975/1400x936.jpg',
  },
  {
    name: 'Ford',
    model: 'Mustang',
    engine: 'gasoline',
    year: 2020,
    color: 'Blue',
    price: 55000,
    mileage: 10000,
    image:
      'https://uzr.com.ua/wp-content/uploads/2023/08/ford-mustang-gtd-1.jpg',
  },
  {
    name: 'Chevrolet',
    model: 'Camaro',
    engine: 'gasoline',
    year: 2019,
    color: 'Yellow',
    price: 60000,
    mileage: 5000,
    image:
      'https://cdn3.riastatic.com/photosnew/auto/photo/chevrolet_camaro__589661583fx.jpg',
  },
  {
    name: 'Toyota',
    model: 'Corolla',
    engine: 'diesiel',
    year: 2021,
    color: 'Gray',
    price: 20000,
    mileage: 5000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2020_Toyota_Corolla_LE_standard_front%2C_5.25.19.jpg/1200px-2020_Toyota_Corolla_LE_standard_front%2C_5.25.19.jpg',
  },
  {
    name: 'Honda',
    model: 'Civic',
    engine: 'gasoline',
    year: 2022,
    color: 'Black',
    price: 22000,
    mileage: 1000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtWgFzwUHuPfOP1I5WYTntyip145qFKvaRA&s',
  },
  {
    name: 'Nissan',
    model: 'Altima',
    engine: 'diesiel',
    year: 2018,
    color: 'White',
    price: 18000,
    mileage: 40000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2020_Toyota_Corolla_LE_standard_front%2C_5.25.19.jpg/1200px-2020_Toyota_Corolla_LE_standard_front%2C_5.25.19.jpg',
  },
  {
    name: 'Volkswagen',
    model: 'Golf',
    engine: 'electric',
    year: 2020,
    color: 'Blue',
    price: 25000,
    mileage: 15000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakjgbazVMdy8I3dfm6AYdYNx9_oLMUAp40w&s',
  },
  {
    name: 'Hyundai',
    model: 'Elantra',
    engine: 'gasoline',
    year: 2019,
    color: 'Silver',
    price: 19000,
    mileage: 30000,
    image: 'https://example.com/hyundai-elantra.jpg',
  },
  {
    name: 'Kia',
    model: 'Optima',
    engine: 'diesiel',
    year: 2020,
    color: 'Red',
    price: 21000,
    mileage: 20000,
    image: 'https://i.infocar.ua/i/2/4623/89005/1920x.jpg',
  },
  {
    name: 'Mazda',
    model: 'Mazda3',
    engine: 'electric',
    year: 2021,
    color: 'Blue',
    price: 23000,
    mileage: 10000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9Q9bcSIAr_NiNp67t8MfDTymcV0yoszcog&s',
  },
  {
    name: 'Subaru',
    model: 'Impreza',
    engine: 'gasoline',
    year: 2022,
    color: 'Green',
    price: 24000,
    mileage: 5000,
    image: 'https://i.infocar.ua/i/12/4265/1400x936.jpg',
  },
  {
    name: 'Volvo',
    model: 'S60',
    engine: 'diesiel',
    year: 2020,
    color: 'Black',
    price: 35000,
    mileage: 15000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2019_Volvo_S60_T5%2C_front_1.26.20.jpg/1200px-2019_Volvo_S60_T5%2C_front_1.26.20.jpg',
  },
  {
    name: 'Jaguar',
    model: 'XE',
    engine: 'electric',
    year: 2019,
    color: 'White',
    price: 37000,
    mileage: 25000,
    image:
      'https://vidi.ua/uploads/media/dc_car_gallery/0002/65/thumb_164047_dc_car_gallery_big.png',
  },
  {
    name: 'Lexus',
    model: 'IS',
    engine: 'gasoline',
    year: 2021,
    color: 'Gray',
    price: 38000,
    mileage: 10000,
    image:
      'https://cdn3.riastatic.com/photosnew/auto/photo/lexus_is__593303512fx.jpg',
  },
  {
    name: 'Infiniti',
    model: 'Q50',
    engine: 'electric',
    year: 2022,
    color: 'Blue',
    price: 40000,
    mileage: 5000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cZxshMq2NqkO4x7BvwVIdBCActABolBe6Q&s',
  },
  {
    name: 'Acura',
    model: 'TLX',
    engine: 'gasoline',
    year: 2020,
    color: 'Silver',
    price: 33000,
    mileage: 15000,
    image: 'https://i.infocar.ua/i/12/5390/1400x936.jpg',
  },
  {
    name: 'Alfa Romeo',
    model: 'Giulia',
    engine: 'gasoline',
    year: 2021,
    color: 'Red',
    price: 42000,
    mileage: 10000,
    image:
      'https://www.aelita.ua/wp-content/uploads/2020/03/hp6ej4o489441h0iqqtmgmt1hn5d-1024x683.jpg',
  },
  // Add more car objects as needed
];

async function seedDatabase() {
  try {
    const connection = await connect('mongodb://localhost:27017/catalog');
    const CarModel = connection.model(
      'Car',
      new connection.Schema({
        name: String,
        model: String,
        engine: {
          type: String,
          enum: ['gasoline', 'electric', 'diesiel'],
        },
        year: Number,
        color: String,
        price: Number,
        mileage: Number,
        image: String,
      }),
    );

    await CarModel.insertMany(cars);
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase().then();
