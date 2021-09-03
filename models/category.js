// Cart Model
import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
   
    },
    sku: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        default:"active"
    },
});
// 
export default mongoose.models.Category || mongoose.model("Category", CategorySchema);