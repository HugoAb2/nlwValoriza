import "reflect-metadata";
import express from "express";
import {router} from "./Routes";

import "./database";

const app = express();

app.use(express.json);

app.use(router);

app.listen(3003, () => console.log("Server is Running on port3003"));


