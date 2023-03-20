import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import userRoutes from './routes/user';
import mintRoutes from './routes/mint';

const connStr = `mongodb://mongodb:27017/add3`;
mongoose.connect(connStr).catch(error => console.error(error));

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connection.on("error", (error: any) => console.error(error));
mongoose.connection.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => console.log(`⚡️[server]: Server is running on PORT: ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/mint', mintRoutes);
app.use('/user', userRoutes);


