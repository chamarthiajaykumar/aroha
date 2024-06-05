import mongoose, { Schema } from "mongoose";

const EnquiriesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Enquiries =
  mongoose.models.enquiries || mongoose.model("enquiries", EnquiriesSchema);

export default Enquiries;
