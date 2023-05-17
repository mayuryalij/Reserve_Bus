const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const busBookingSchema = new Schema(
  {
    busId: { type: ObjectId, ref: "Bus" },
    dateOfJourney: {
      type: Date,
      required: true,
    },
    seatsBooked: [
      {
        seatNumber: {
          type: String,
        },
      },
    ],
    routeId: { type: ObjectId, ref: "Routes" },
    userName: {
      type: String,
      required: true,
    },
    userMobile: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userGender: {
      type: String,
      required: true,
    },
    userAge: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BusBooking = mongoose.model("BusBooking", busBookingSchema);
module.exports = BusBooking;