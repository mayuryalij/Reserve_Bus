const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const cityRoutesSchema = new Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  buses: [{ type: ObjectId, ref: "Bus" }],
});

const RoutesSchema = mongoose.model("Routes", cityRoutesSchema);
module.exports = RoutesSchema;