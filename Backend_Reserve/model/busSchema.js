const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const busSchema = new Schema({
  busNumber: { type: String, required: true },
  routes: [
    {
      Departuretime: {
        type: String,
      },
      Reachingtime: {
        type: String,
      },
      routeId: { type: ObjectId, ref: "Routes" },
    },
  ],
  type: { type: String, required: true },
  fare: { type: Number, required: true },
  seats: [
    {
      seatNumber: { type: String, required: true },
      isAvailable: { type: Boolean, required: true, default: true },
    },
  ],
  busName: { type: String, required: true },
});

module.exports = mongoose.model("Bus", busSchema);