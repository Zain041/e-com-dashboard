// Product Model
import mongoose from 'mongoose';

const { String} = mongoose.Schema.Types;

const AdminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    mediaUrl: {
        type: String,
        required: true
    },
    
},{
    timestamps: true
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);