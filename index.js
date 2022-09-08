import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import carRoute from "./routes/carRoute.js"

const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());

const connectionToDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connection to mongoDB is successfull!");
    } catch (error) {
      throw error;
    }
};

app.get("/", (req, res ) => {
    res.send("working");
})

app.use("/api", carRoute)

app.listen(port, () => {
    connectionToDB();
    console.log(`server started on port ${port}`)
})