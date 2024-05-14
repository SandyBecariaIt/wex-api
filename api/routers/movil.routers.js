import { Router } from "express";
import { methods as movilController } from "./../controllers/movil.controller";

const router = Router();

router.get('/api/get-all-info', movilController.getAllInformation);

export default router;
