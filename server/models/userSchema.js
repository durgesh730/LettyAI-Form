const mongoose= require ("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        default: ''
    },
    DOB: {
        type: String,
        default: ''
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Form', formSchema);