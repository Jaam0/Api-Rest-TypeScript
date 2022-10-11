import "dotenv/config";
import "colors";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import {dbAuth} from './config/database';

import { router } from "./routes";

const app = express();

//Database
dbAuth();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server running on port:${PORT}`.bgGreen));
