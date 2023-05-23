const express = require("express")

const { fertilizerInsert, getFertilizers, getFertilizerDetails, updateFertilizer } = require("../Controllers/FertilizerController");

const router = express.Router();

//fertilizer insertion
router.post("/fertilizerInsertion", fertilizerInsert);

//get all fertilizers
router.get("/getAllFertilizers", getFertilizers);

//get selected fertilizer details
router.get("/getFertilizer/:id", getFertilizerDetails);

//update a specific fertilizer details
router.put("/updateFertilizer", updateFertilizer)

module.exports = router;
