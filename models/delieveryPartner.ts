import mongoose from "mongoose";

const delieveryPartnerSchema = new mongoose.Schema({
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
     email: {
          type: String,
     },
     mobile: {
          type: Number,
          maxLength: 10,
     },
}, {
     timestamps: true
});

export default mongoose.model("DelieveryPartner", delieveryPartnerSchema);