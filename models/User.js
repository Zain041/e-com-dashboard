// User Model
import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Address: {
        type:String ,
        required: true
    },
    status: {
        type: String,
        default:"pending"
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ["user", "admin", "root"]
    }
}, {
    timestamps: true
});

export default mongoose.models.User || mongoose.model("User", UserSchema);