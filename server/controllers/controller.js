import mongoose from "mongoose";
import PostUser from "../modals/modal.js";

export const createUser = async (req,res) => {
    const user = req.body;

    const newUser = new PostUser(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
        console.log('User has been created')
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}  
