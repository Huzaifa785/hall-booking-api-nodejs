import express from "express";

const router = express.Router();

const rooms = [
  {
    id: 0,
    numberOfSeats: 30,
    amenities: ["Television", "Air Conditioner", "Water Purifier"],
    pricePerHour: "$20",
  },
  {
    id: 1,
    numberOfSeats: 20,
    amenities: ["Air Conditioner"],
    pricePerHour: "$20",
  },
];

const customerBookedRooms = [
  {
    customerName: "John Doe",
    bookingDate: "September 23, 2021",
    startTime: "12:30:00",
    endTime: "1:30:00",
    roomId: 0,
  },
  {
    customerName: "Jane Doe",
    bookingDate: "September 25, 2021",
    startTime: "19:00:00",
    endTime: "20:30:00",
    roomId: 1,
  },
];

const bookedRooms = [
  {
    customerName: "John Doe",
    bookingDate: "September 23, 2021",
    startTime: "12:30:00",
    endTime: "1:30:00",
    booked: true,
    roomId: 0
  },
  {
    customerName: "Jane Doe",
    bookingDate: "September 25, 2021",
    startTime: "19:00:00",
    endTime: "20:30:00",
    booked: true,
    roomId: 1
  },
];

// all routes in here are starting with /rooms
// Getting all the available rooms
router.get("/", (req, res) => {
  res.send(rooms);
});

// Create a room endpoint
router.post("/create-room", (req, res) => {
  const room = req.body;

  rooms.push(room);

  res.send(`New room has been created successfully...`);
});

// Get all customers with booked rooms
router.get("/customer-booked-rooms", (req, res) => {
  res.send(customerBookedRooms);
});

// Book A Room - API Endpoint
router.post("/book-room", (req, res) => {
  const room = req.body;

  for (let i = 0; i < customerBookedRooms.length; i++) {
    if (
      req.body.bookingDate !== customerBookedRooms[i].bookingDate &&
      req.body.startTime !== customerBookedRooms[i].startTime
    ) {
      customerBookedRooms.push(room);
      res.json({
        message: `Room successfully booked for ${req.body.customerName}`,
      });
    } else {
      res.json({
        message: "Room already booked...",
      });
    }
  }
});

// Get booked rooms
router.get("/booked-rooms", (req, res) => {
  res.send(bookedRooms);
});

export default router;
