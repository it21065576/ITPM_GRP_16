const express = require("express");

const { plantInsert, getPlants, getPlantDetails, deletePlant, updatePlant } = require("../Controllers/PlantController");

const router = express.Router();

//plant insertion
router.post("/plantInsertion", plantInsert);

//get all products
router.get("/getAllPlants", getPlants);

//get selected product
router.get("/getPlant/:id", getPlantDetails);

//delete a specific plant
router.delete("/deletePlant/:id", deletePlant);

//upadte a specific plant
router.put("/updataPlant", updatePlant)

module.exports = router;