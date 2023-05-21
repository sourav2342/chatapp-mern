import mongoose from "mongoose";

const appScheme = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String
});

export default mongoose.model('messagecontent', appScheme);
