const bcrypt = require('bcryptjs')
const UserModel = require('../model/usermodel');

const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            fullName: fullName,
            email: email,
            password: hashPassword
        })

        res.status(201).json({ message: "User Created Successfully", user: newUser });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Sever Error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            res.status(400).json({ message: "Invalid Username or Password" })
        } else {
            res.status(200).json({ message: "Login Successfully", data: user });
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Sever Error" })
    }
}

module.exports = {
    signup,
    login,
}