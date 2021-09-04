import shortid from 'shortid';
import Brand from '../../models/brand';

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
   
   
   
    const brands = await Brand.find().sort({viewCount: 'desc'})
    res.status(200).json({brands});
}

const handlePostRequest = async (req, res) => {
    const { brandName } = req.body;
    const sku = shortid.generate();
    try{
        if(!brandName || !sku ){
            return res.status(422).send("Brand missing one or more fields")
        }
    console.log(brandName)
        const brand = await new Brand({
            brandName,
            sku,
            
            
        }).save();
    
        res.status(200).json(brand);
    } catch(error) {
        // console.error(error)
        res.status(500).send(error.message);
    }
}

const handlePutRequest = async (req, res) => {
    // console.log(req.body)
    const { _id, brandName,status } = req.body;
    await Brand.updateOne(
        {_id},
        {
            $set: {brandName,status},
            $currentDate: { updatedAt: true }
        }
    )
    // console.log(up)
    res.status(203).send('Brand Updated');
}

const handleDeleteRequest = async (req, res) => {
    const { _id } = req.query;
    try {
        await Brand.findByIdAndDelete({ _id });
       
        res.status(204).json({msg:"deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting products');
    }
}