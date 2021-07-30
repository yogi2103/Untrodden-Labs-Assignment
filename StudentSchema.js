const mongoose=require('mongoose'); 
const Schema=mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
    },
    contact: {
        type: Number,   //can also be string if the contact is an email
    },
    subjects: [String],   //array of subjects
    class: {
        type: String,
        required: true
    },
    societies:[String],     //array of socities
    year: {
        type: Number,
    }
},{timestamps:true})

const Student=mongoose.model('student',studentSchema);
module.exports= Student;