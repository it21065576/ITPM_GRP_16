const express = require("express")

const { machineInsert, getMachines, getMachineDetails, deleteMachine, updateMachine } = require("../Controllers/MachineController");

const router = express.Router();

//plant insertion
router.post("/machineInsertion", machineInsert);

//get all products
router.get("/getAllMachines", getMachines);

//get selected product
router.get("/getMachines/:id", getMachineDetails)

//delete a specific machine
router.delete("/deleteMachine/:id", deleteMachine)

//update selected machine details
router.put("/updateMachines", updateMachine)

module.exports = router;