import express from "express";
import { getPharmacy, getPharmacyById, loginPharmacy, registerPharmacy } from "../controllers/pharmacyController.js";


const pharmacyRouter = express.Router();

pharmacyRouter.get('/', getPharmacy)
pharmacyRouter.get('/:id', getPharmacyById)
pharmacyRouter.post('/', registerPharmacy);
pharmacyRouter.post('/login', loginPharmacy);


export default pharmacyRouter;