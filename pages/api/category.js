import shortid from 'shortid';
import Category from '../../models/category';

import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    switch (req.method){
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

const handleGetRequest = async (req, res) => {
   
   
   
    const categories = await Category.find().sort({viewCount: 'desc'})
    res.status(200).json({categories});
}

const handlePostRequest = async (req, res) => {
    const { categoryName } = req.body;
    const sku = shortid.generate();
    try{
        if(!categoryName || !sku ){
            return res.status(422).send("Category missing one or more fields")
        }
    
        const category = await new Category({
            categoryName,
            sku,
            
            
        }).save();
    
        res.status(200).json(category);
    } catch(error) {
        // console.error(error)
        res.status(500).send("Error creating product on the Server");
    }
}

const handlePutRequest = async (req, res) => {
    // console.log(req.body)
    const { _id, name, price, description, productType, mediaUrl } = req.body;
    await Product.updateOne(
        {_id},
        {
            $set: {name, price, description, productType, mediaUrl},
            $currentDate: { updatedAt: true }
        }
    )
    // console.log(up)
    res.status(203).send('Product Updated');
}

const handleDeleteRequest = async (req, res) => {
    const { _id } = req.query;
    try {
        await Product.findByIdAndDelete({ _id });
        await Cart.updateMany(
            { "products.product": _id },
            { $pull: { products:  {product: _id}} }
        );
        await Order.updateMany(
            { "products.product": _id },
            { $pull: { products:  {product: _id}} }
        )
        res.status(204).json({});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting products');
    }
}