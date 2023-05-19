// const {request} = request('express');
const express = require("express");
const Donation = require("../../models/Donation/Donation");

const router = express.Router();


//Save Service
router.post("/donation/save", (req, res) => {
    let newDonate = new Donation(req.body);

    newDonate.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

        return res.status(200).json({
            success: "Services Added Successfully",
        });
    });
});

//Get Service
router.get("/donation", async (req, res) => {
    await Donation.find()

        .then((Donation) => {

            res.json(Donation);

        })

        .catch((err) => {

            console.log(err);

        });
});

//get a specific Service provider
router.get("/donation/:id", (req, res) => {
    let postId = req.params.id;

    Donation.findById(postId, (err, donations) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            donations
        });
    });
});

//Update Services
router.put("/donation/update/:id", (req, res) => {
    Donation.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, donations) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});

//Delete Services
router.delete("/donation/delete/:id", (req, res) => {
    Donation.findByIdAndRemove(req.params.id).exec((err, deleteDonation) => {
        if (err)
            return res.status(400).json({
                message: "Delete Unsuccessful",
                err,
            });
        return res.json({
            message: "Delete Successful", deleteDonation,
        });
    });
});

module.exports = router;