const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409)
                .json({
                    message: 'User already exists, please login.',
                    success: false
                });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword 
        });

        await newUser.save();

        res.status(201)
            .json({
                message: "Signup successful",
                success: true
            });

    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false,
                error: err.message
            });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        const errorMsg = 'Authentication failed. Incorrect email or password.';

        if (!user) {
            return res.status(403)
                .json({
                    message: errorMsg,
                    success: false
                });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(403)
                .json({
                    message: errorMsg,
                    success: false
                });
        }

        const jwtToken = jwt.sign(
            {
                email: user.email,
                _id: user._id
            },
            process.env.JWT_SECRET, 
            { expiresIn: '24h' }     
        );

        res.status(200)
            .json({
                message: "Login successful",
                success: true,
                jwtToken,               
                email,
                name: user.name         
            });

    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false,
                error: err.message       
            });
    }
};

module.exports = {
    signup,
    login
};
