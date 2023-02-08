const express = require('express');
const router = express.Router();

const User = require('../database/models/user')

// Adding user to a Databased
router.post('/', async (req, res) => {
    
    const {name, age, email} = req.body;
    const userData = new User({
        name,
        age,
        email
    });

    try {
        const savedData = await userData.save();
        res.status(200).send(savedData);
    } catch (err) {
        res.status(400).send({ message: err.message});
    }
});

// Get all users from DB
router.get('/getAll', async (req, res) => {
    try{
        const data = await User.find();
        res.send(data);
    } catch(err) {
        res.status(500).send({message: err.message});
    }
});

// Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await User.findById(req.params.id);

        res.send(data);
    } catch (err) {
        res.status(500).send({ message: err.message});
    }
});

// Update a particular user
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch(err) {
        res.status(400).send({ message: err.message });
    }
});

// Delete a particular user
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await User.findByIdAndDelete(id);

        res.send(`Document with ${data.name} has been deleted..`);
    } catch(err) {
        res.status(400).send({ message: err.message});
    }
});

module.exports = router;