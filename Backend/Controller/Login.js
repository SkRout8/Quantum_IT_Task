const Schema = require("../Models/Schema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter email and password",
            });
        }

        let user = await Schema.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User does not exist",
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        user = user.toObject();
        user.token = token;


        res.cookie("Token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            secure: true,

        });

        res.status(200).json({
            success: true,
            message: "You logged in successfully",
            token,
            password,
            user,
        });

    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({
            success: false,
            message: "Login failed",
        });
    }
};
