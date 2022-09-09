import carModel from "../models/carModel.js";

export const createCar =  async (req,res) => {
    try {
        const newCar = new carModel(req.body);
        await newCar.save();
        res.status(201).send("new car is created");
    } catch (error) {
     console.error(error)
    }
};

export const getAllCars =  async (req, res) => {
    try {
        const allCars = await carModel.find();
        res.status(202).json(allCars);
    } catch (error) {
        console.error(error);
    }
};

export const getCarById =  async(req,res) => {
    try {
        const car = await carModel.findById(req.params.id);
        res.status(200).json(car);
    } catch (error) {
        console.error(error)
    }
};

export const deleteCarById =  async(req,res) => {
    try {
        await carModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`car has been successfully deleted`);
    } catch (error) {
        console.error(error)
    }
};

export const updateCar =  async(req,res) => {
    try {
        const updatedCar = await carModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedCar);
    } catch (error) {
        console.error(error)
    }
};

export const deleteMultipleCars = async(req, res) => {
    try {
        await carModel.deleteMany(req.body);
        res.status(200).send(`car has been successfully deleted`);
    } catch (error) {
        console.error(error)
    }
}