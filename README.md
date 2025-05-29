## Catalog API

This project is a simple catalog API built with NestJS and MongoDB.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Application**
   ```bash
   npm run start:dev
   ```

3. **Seed the Database**
   
   To populate the database with initial data, run the seed script:
   
   ```bash
   ts-node src/seed.ts
   ```
   
   If you encounter an error related to the `.ts` file extension, you may need to install `ts-node` globally:
   
   ```bash
   npm install -g ts-node
   ```

   Then, rerun the seed script:
   
   ```bash
   ts-node src/seed.ts
   ```

## Additional Information

- Ensure MongoDB is running locally on your machine at `mongodb://localhost:27017/catalog`.
- The seed script will populate the database with a collection of car objects with various attributes like name, model, engine, year, color, price, and mileage.
