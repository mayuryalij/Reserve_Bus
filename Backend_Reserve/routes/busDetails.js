const express = require("express");
const {
  getBusDetails,
  bookTicket,
  getSeats,
  getRoutesFromId,
  getRoutes,
} = require("../controller/busDetails");

const router = express.Router();

router.post("/getDetails", getBusDetails);
router.post("/bookTicket", bookTicket);
router.post("/getSeats", getSeats);
router.get("/bus-display/:id", getRoutesFromId);
router.get("/getRoutes", getRoutes);

module.exports = router;