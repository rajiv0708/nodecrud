import mongoose from "mongoose";

// Define Schema
const empSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  age: { type: Number, require: true, min: 18, max: 60 },
  phone: { type: Number, require: true },
});

// Model

const EmpModel = mongoose.model("employees", empSchema);

export default EmpModel;
