// Cart Model
import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const BrandSchema = new mongoose.Schema({
    brandName: {
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
export default mongoose.models.Brand || mongoose.model("Brand", BrandSchema);