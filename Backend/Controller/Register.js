
const Schema = require('../Models/Schema')
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
    try {
        const { name, dob, email, password } = req.body;
        const exsituser = await Schema.findOne({ email });
        if (exsituser) {
            return res.status(500).json({
                success: false,
                message: "User already exists",
            });
        }

        

        const user = await Schema.create({
            name,
            dob,
            email,
            password
        });

        
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be registered, try again later",
        });
    }
};

