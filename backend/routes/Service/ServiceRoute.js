// const {request} = request('express');
const express = require("express");
const Service = require("../../models/Service/Service");

const router = express.Router();


//Save Service
router.post("/service/save", (req, res) => {
    let newService = new Service(req.body);

    newService.save((err) => {
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
router.get("/service", async (req, res) => {
    // Service.find().exec((err, services) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: err,
    //         });
    //     }
    //     return res.status(200).json({
    //         success: true,
    //         existingService:services
    //     });
    // });
    await Service.find()

        .then((Service) => {

            res.json(Service);

        })

        .catch((err) => {

            console.log(err);

        });
});

//get a specific Service provider
router.get("/service/:id", (req, res) => {
    let postId = req.params.id;

    Service.findById(postId, (err, services) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            services
        });
    });
});

//Update Services
router.put("/service/update/:id", (req, res) => {
    Service.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, services) => {
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
router.delete("/service/delete/:id", (req, res) => {
    Service.findByIdAndRemove(req.params.id).exec((err, deleteService) => {
        if (err)
            return res.status(400).json({
                message: "Delete Unsuccessful",
                err,
            });
        return res.json({
            message: "Delete Successful", deleteService,
        });
    });
});

module.exports = router;
