import mongoose from "mongoose";
const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/ShipmentDB")
    .then((data) => {
      console.log("Connected to mongoDB server");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDatabase;
