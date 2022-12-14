import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      require:true,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
      maxLength: 10,
      require : true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);
