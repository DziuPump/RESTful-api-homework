import express from "express";
import { createCar, deleteCarById, getAllCars, getCarById, updateCar } from "../controller/carController.js";

const router = express.Router();


router.post("/create", createCar);
router.get('/get', getAllCars);
router.get('/get/:id', getCarById);
router.delete('/delete/:id', deleteCarById);
router.put('/update/:id', updateCar);

export default router;