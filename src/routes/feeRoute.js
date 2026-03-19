import express from 'express';
import {createFee, feeStructure} from "../controllers/feeController.js";

const feeRoute = express.Router();

feeRoute.get("/", feeStructure);
feeRoute.post("/create", createFee);

export default feeRoute;