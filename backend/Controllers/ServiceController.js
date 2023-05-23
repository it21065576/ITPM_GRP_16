const fertilizerModel = require("../Models/FertilizerModel");

//insert
const fertilizerInsert = async (req, res) => {
    const {
        fertilizerID,
        fertilizerName,
        description,
        price,
        category
    } = req.body;

    const FertilizerItem = req.files.file;
    const FertilizerNameStore = new Date().getTime();
    await FertilizerItem.mv("Assets/Fertilizers/" + `${FertilizerNameStore}.jpg`, (err) => {
        console.log("This is a file error " + err);
    })
    console.log("File name is " + FertilizerNameStore);

    try {
        const fertilizers = new fertilizerModel({
            fertilizerID,
            fertilizerName,
            description,
            price,
            category,
            fertlilizerImage: `${FertilizerNameStore}.jpg`
        });
        return await fertilizers
            .save()
            .then((value) => {
                return res.status(201).json({ ID: value._id })
            }).catch((err) => {
                return res.status(500).json({ err });
            })
    } catch (error) {
        console.log("Error", error);
        res.status(400).json({ error: error.message });
    }

};

//get all fertilizers
const getFertilizers = async (req, res) => {
    try {
        const fertilizers = await fertilizerModel.find();
        return res.status(200).json(fertilizers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

//get selected fertilizer view
const getFertilizerDetails = async (req, res) => {
    try {
        const ID = req.params.id;
        const fertilizer = await fertilizerModel.find({ _id: ID });

        res.status(200).send({ status: "Fertilizer data received", FertilizerDetails: fertilizer });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

//update a specific fertilizer
const updateFertilizer = async (req, res) => {
    const id = req.body.id;
    const {
        fertilizerID,
        fertilizerName,
        description,
        price,
        category
    } = req.body;

    const newFertilizer = {
        fertilizerID,
        fertilizerName,
        description,
        price,
        category
    };

    await fertilizerModel.findByIdAndUpdate(id, newFertilizer).then(() => {
        res.status(200).send({ state: "Updates", data: newFertilizer });
    }).catch((err) => {
        res.status(400).send({ state: err });
    })
}

module.exports = {
    fertilizerInsert,
    getFertilizers,
    getFertilizerDetails,
    updateFertilizer
}
