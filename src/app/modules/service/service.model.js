const { Schema, model } = require("mongoose");

// Define the schema
const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create a model based on the schema
const ServiceModel = model("Service", serviceSchema);

// Export the model
module.exports = ServiceModel;
