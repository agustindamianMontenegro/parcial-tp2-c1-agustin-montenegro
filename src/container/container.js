import { FlightDAO } from "../data-access/flight.dao.js";
import { FlightService } from "../services/flight.service.js";
import { FlightController } from "../controllers/flightController.js";

const flightDao        = new FlightDAO();
const flightService    = new FlightService(flightDao);
const flightController = new FlightController(flightService);

export default flightController;
