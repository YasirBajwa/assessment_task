
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  
    userEmail:String,
    userPassword:String

})


const PostMessage = mongoose.model("PostMessage",postSchema);

export default PostMessage;