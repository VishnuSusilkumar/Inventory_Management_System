import express from "express";
import { connectDatabase } from "./config/database";
import dotenv from "dotenv";
import inventoryRoutes from './routes/inventory.routes';
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/items', inventoryRoutes);

connectDatabase();

app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
