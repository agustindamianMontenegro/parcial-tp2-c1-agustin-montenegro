import distance from '../utils/distance.js';
import { FlightModel } from '../models/flight.model.js';
export class FlightService {
  constructor(flightDAO) {
    this.dao = flightDAO;
  }

  async createOrUpdateFlight(data) {
    const flight = new FlightModel(data);
    const saved = await this.dao.upsert(flight);

    const all = await this.dao.getAll();
    if (all.length > 1) {
      const others = all.filter((f) => f.id.toLowerCase() !== saved.id.toLowerCase());
      const alertIds = others
        .filter((f) => distance(flight, f) < 500)
        .map((f) => f.id);

      if (alertIds.length > 0) {
        throw new Error("Riesgo de colision");
      }
    }

    return saved;
  }

  async getFlight(id) {
    return this.dao.findById(id);
  }

  async listFlights() {
    return this.dao.getAll();
  }
}
