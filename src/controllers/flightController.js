
export class FlightController {
    constructor(flightService) {
        this.service = flightService;
    }

    async createOrUpdate(req, res) {
        try {
            const flight = await this.service.createOrUpdateFlight(req.body);
            res.json(flight);
        } catch (err) {
            res.status(400).json({ errorMsg: err.message });
        }
    }

    async getById(req, res) {
        const flight = await this.service.getFlight(req.params.id);
        if (!flight) return res.status(404).json({ error: 'Not found' });
        res.json(flight);
    }

    async getAll(req, res) {
        const list = await this.service.listFlights();
        res.json(list);
    }
}
