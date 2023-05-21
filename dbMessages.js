import mongoose from "mongoose";

const appScheme = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received:String
});

export default mongoose.model('messagecontents', appScheme);
