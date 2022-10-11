import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  sourceLocation: {
    type: String,
    required: true,
    trim: true,
  },
  targetLocation: {
    type: String,
    required: true,
    trim: true,
  },
  customerId: {
    type: String,
    require: true,
  },
  hsnCode: {
    type: String,
    required: true,
  },
  weightOfShipment: {
    type: Number,
    required: true,
  },
  typeOfContainer: {
    type: String,
    require: true,
  },
  contactNo: {
    type: Number,
    maxLength: 10,
  },
  precautionsNeeded: {
    type: String,
  }
}, {
  timestamps: true
});

export default mongoose.model("Shipment", shipmentSchema);