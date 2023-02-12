import express from "express";
import EmployeController from "../controller/employeController.js";
const router = express.Router();

router.get("/", EmployeController.getAllDoc);
router.post("/", EmployeController.createDoc);
router.get("/edit/:id", EmployeController.edit);
router.post("/update/:id", EmployeController.updateDoc);
router.post("/delete/:id", EmployeController.delete);
export default router;
