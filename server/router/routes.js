const  express = require("express");
const router = express.Router();
const form = require ('../models/userSchema')

router.post('/studentform', async (req, res) => {

    const { fname, lastname, DOB, phonenumber,gender, country, state, email } = req.body;

    if (!fname || !DOB || !phonenumber || !state) {
        res.status(404).json({ error: "fill all the deatils" })
    }

    try {
        const finalUser = new form({ fname, lastname, DOB, phonenumber,gender, country, state, email });
   
        const storeData = await finalUser.save();
        // console.log(storeData);
        res.status(201).json({ status: 201, storeData })

    } catch (error) {
        res.status(201).json({ status: 201, message: " In form some internal error occurred" })
    }
})


router.get('/fetchalldata', async (req, res) => {
    try {
         const notes = await form.find(req.params._id);
        //  console.log(notes)
         res.json(notes)
    } catch (error) {
         console.error(error.message);
         res.status(500).send("Some error occured")
    }
})




module.exports = router