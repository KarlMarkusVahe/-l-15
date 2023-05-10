import mongoose from "mongoose";

const person = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    workPosition: {
        required: true,
        type: String
    },
    personalCode: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    birthDate: {
        required: true,
        type: Date
    },
    phone: {
        required: true,
        type: String
    }
})

export default mongoose.model('User', person);