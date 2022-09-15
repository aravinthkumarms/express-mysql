const db = require('../models');




const pd = db.personalDetails;
const educationDetail = db.educationDetails;


// Create and Save a new personalDetail

exports.saveDetail = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }
    let personaldetail = await pd.create(info);
    res.status(200).send(personaldetail);
}

// Retrieve all personalDetails from the database.
exports.getAll = async (req, res) => {
    const personaldetails = await pd.findAll();
    res.status(200).send(personaldetails); // send the response
}

// Find a single personalDetail with an id
exports.getSpecific = (req, res) => {
    let id = req.params.id;
    let personaldetail = pd.findOne({
        where: {
            id: id
        }
    });
    res.status(200).send(personaldetail);
}

// Update a personalDetail by the id in the request
exports.updateSpecific = (req, res) => {
    let id = req.params.id;
    let personaldetail = pd.update({ where: { id: id } });
    res.status(200).send(personaldetail);
}

// Delete a personalDetail with the specified id in the request
exports.deleteSpecific = (req, res) => {
    let id = req.params.id;
    let personaldetail = pd.destroy({
        where: {
            id: id
        }
    });
    res.status(200).send(personaldetail);
}

