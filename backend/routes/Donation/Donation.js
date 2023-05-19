// const {request} = request('express');
const express = require("express");
const DonarDetails = require("../../models/Donation/DonarDetails");

const router = express.Router();


//Save Donation
router.post("/DonarDetails/save", (req, res) => {
    let newDonarDetails = new DonarDetails(req.body);

    newDonarDetails.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

        return res.status(200).json({
            success: "Donar Details Added Successfully",
        });
    });
});

//Get DonarDetails
router.get("/DonarDetails", async (req, res) => {
    await DonarDetails.find()

        .then((DonarDetails) => {

            res.json(DonarDetails);

        })

        .catch((err) => {

            console.log(err);

        });
});

router.get("/DonarDetails/:id", (req, res) => {
    let postId = req.params.id;

    DonarDetails.findById(postId, (err, DonarDetails) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            DonarDetails
        });
    });
});

//Update Services
router.put("/DonarDetails/update/:id", (req, res) => {
    DonarDetails.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, DonarDetails) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});

//Delete DonarDetails
router.delete("/DonarDetails/delete/:id", (req, res) => {
    DonarDetails.findByIdAndRemove(req.params.id).exec((err, deleteDonarDetails) => {
        if (err)
            return res.status(400).json({
                message: "Delete Unsuccessful",
                err,
            });
        return res.json({
            message: "Delete Successful", deleteDonarDetails,
        });
    });
});

module.exports = router;
