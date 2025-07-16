const flights = [];

export class FlightDAO {
    async upsert(flight) {
        const existing = flights.find(f => f.id.toLowerCase() === flight.id.toLowerCase());
        if (existing) {
            existing.xa = flight.xa;
            existing.ya = flight.ya;
            existing.za = flight.za;
            return existing;
        }
        flights.push({ ...flight });
        return flight;
    }

    async findById(id) {
        return flights.find(f => f.id.toLowerCase() === id.toLowerCase()) || null;
    }

    async getAll() {
        return [...flights];
    }
}
