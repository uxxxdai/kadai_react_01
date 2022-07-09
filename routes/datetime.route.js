// routes/datetime.route.js

import express from "express";
import { getResult } from "../controllers/datetime.controller.js";

export const jankenRouter = express.Router();

jankenRouter.post("/", (req, res) => getResult(req, res));