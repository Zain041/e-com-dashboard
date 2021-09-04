import Admin from "../../models/Admin";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import connectDb from '../../utils/connectDb';

connectDb();
export default async (req, res) => {
    switch (req.method){
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}


const handleGetRequest = async (req, res) => {
    const { id } = req.query;
   
    const admin = await Admin.find({
        _id: id
    })
    res.status(200).json({admin, admin});
}



const handlePostRequest = async (req, res) => {
    const { fullname, email, password,mediaUrl } = req.body;
    try {
        // check email, name, password format
        if (!isLength(fullname, {min: 3, max: 15})) {
            return res.status(422).send("Name must be 3-10 characters long");
        } else if (!isLength(password, {min: 5, max: 15})){
            return res.status(422).send("Password must be 5-15 characters long");
        } else if (!isEmail(email)){
            return res.status(422).send("Email must be valid");
        }

        const user = await Admin.findOne({ email });
        if (user){
            return res.status(422).send(`User already exist with that ${email}`);
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = await new Admin({
            fullname,
            email,
            password: password,
            
        }).save();
        // console.log({newUser});
        // create a cart for the new user
        // await new Cart({ user: newUser._id }).save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.status(201).json({user:newUser,token:token});
    } catch (error) {
        console.error(error);
        res.status(500).send("Error in signup. Please try again.");
    }
}

const handlePutRequest = async (req, res) => {
    // console.log(req.body)
    try {
        const { _id } = req.query;
    const { fullname, email, password,mediaUrl } = req.body;
    await Admin.updateOne(
        {_id},
        {
            $set: { fullname, email, password,mediaUrl },
            $currentDate: { updatedAt: true }
        }
    )
    // console.log(up)
    res.status(203).send('Admin Updated');
    } catch (error) {
         res.status(500).send('Admin was not Updated');
    }
}


const handleDeleteRequest = async (req, res) => {
    const { _id } = req.query;
    console.log(_id)
    try {
        await Admin.findByIdAndDelete({ _id });
        
        res.status(204).json({msg:"Admin has been deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).send('Admin was not deleted');
    }
}