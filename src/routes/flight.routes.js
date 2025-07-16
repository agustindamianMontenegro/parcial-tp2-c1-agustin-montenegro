import { Router } from "express";
import flightController  from "../container/container.js";

const router = Router();
const ctrl = flightController;

router.post("/", (req, res) => ctrl.createOrUpdate(req, res));
router.get("/:id", (req, res) => ctrl.getById(req, res));
router.get("/", (req, res) => ctrl.getAll(req, res));

export default router;
