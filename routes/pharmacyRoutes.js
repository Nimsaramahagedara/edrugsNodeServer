import express from "express";
import { loginPharmacy, registerPharmacy } from "../controllers/pharmacyController.js";


const pharmacyRouter = express.Router();

pharmacyRouter.post('/', registerPharmacy);
pharmacyRouter.post('/login', loginPharmacy);


export default pharmacyRouter;