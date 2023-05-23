const RegisterUserModel = require("../Models/RegisterUserModel");

//insert
const RegisterUserInsert = async (req, res) => {
    const { plantID, plantName, description, price, category } = req.body;
    try {
        const RegisterUserInsertion = await RegisterUserModel.create({ plantID, plantName, description, price, category });
        res.status(200).json(RegisterUserInsertion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    RegisterUserInsert
}
