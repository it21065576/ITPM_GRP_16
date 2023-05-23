const MachineModel = require("../Models/MachineModel");

//insert
const machineInsert = async (req, res) => {
    const {
        machineID,
        machineName,
        description,
        price,
        category
    } = req.body;

    const MachineItem = req.files.file;
    console.log("MachineItem", MachineItem)
    const MachineNameStore = new Date().getTime();
    await MachineItem.mv("Assets/Machines/" + `${MachineNameStore}.jpg`, (err) => {
        console.log("This is a file error " + err);
    })
    console.log("File name is " + MachineNameStore);

    try {
        const machines = new MachineModel({
            machineID,
            machineName,
            description,
            price,
            category,
            machineImage: `${MachineNameStore}.jpg`
        });
        return await machines
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

}

//get all machines
const getMachines = async (req, res) => {
    try {
        const machines = await MachineModel.find();
        return res.status(200).json(machines);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

//get selected machine
const getMachineDetails = async (req, res) => {
    try {
        const ID = req.params.id;
        const machines = await MachineModel.find({ _id: ID });
        res.status(200).send({ status: "Machine data recieved", MachineDetails: machines });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

//delete a spacific machine
const deleteMachine = async (req, res) => {
    const id = req.params.id;
    await MachineModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ state: "Success" });
    }).catch((err) => {
        res.status(400).send({ send: err });
    })
}

//update a specific machine item
const updateMachine = async (req, res) => {
    const id = req.body.id;
    const {
        machineID,
        machineName,
        description,
        price,
        category,
    } = req.body;

    console.log("ID==>", id);

    const newMachine = {
        machineID,
        machineName,
        description,
        price,
        category,
    };

    await MachineModel.findByIdAndUpdate(id, newMachine).then(() => {
        res.status(200).send({ state: "Updates", data: newMachine });
    }).catch((err) => {
        res.status(400).send({ state: err });
    })
}

module.exports = {
    machineInsert,
    getMachines,
    getMachineDetails,
    deleteMachine,
    updateMachine
}
