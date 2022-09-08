import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    yearOfManufacture: {
        type: Number,
        required: true,
    },
    fuelType: {
        type: String,
    },
    numOfSeats:{
        type: Number,
    },
    weight:{
        type: Number,
    },
    used:{
        type: Boolean,
    },
    },
    {timestamps: true}
);

export default mongoose.model("car", carSchema);