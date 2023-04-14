import mongoose from "mongoose";

export const userEntity = () => {

    let userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number
    })

    let userSchema2 = new mongoose.Schema({
        name: {type: String, require: true},
        email: {type: String, require: true},
        age: {type: Number, require: true},
        password: {type: String, require: true}
    })

    return mongoose.models.TestOne || mongoose.model('TestOne', userSchema2)


}