import { Router } from 'express';
import flightRouter from './flight.routes.js';
const router = Router();

router.use('/flights', flightRouter);

export default router;
