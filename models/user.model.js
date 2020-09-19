const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profileImg: {
        type: String,
        required: true,
        default: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        require: true
    },
    interest: {
        type: [String],
        enum: ['Javascript', 'React', 'Front-End', 'Back-End']
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    gitHub: {
        type: String,
        required: true,
        trim: true
    },
    linkedin: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User