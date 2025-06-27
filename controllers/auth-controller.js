const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home logic
const home = async (req, res) => {
    try {
        res.status(200).send('Hello world! this is route');
    } catch (error) {
        console.log(error);
    }
}

// Register logic
const register = async (req, res) => {
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({ email});
        if(userExist){
            return res.status(400).json({ msg: "email already exists"});
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password, });

        res.status(201).json({ msg: "Registeration successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString(),});
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

// Register logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        // const passwordCheck = await bcrypt.compare(password, userExist.password)
        const passwordCheck = await userExist.comparePassword(password);

        if(passwordCheck){
            res.status(200).json({ 
                msg: "Login Successful", 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({ message:"Invalid email or password" })
        }

    } catch (error) {
        res.status(500).json("internal server error")
    }
};

module.exports = {home, register, login};