
const getAllProduct = async (req,res)=>{

res.status(200).json({
    message:'I am All Product'
})};

const testinggetAllProduct = async (req,res)=>{

    res.status(200).json({
        message:'I am All Testing Product'
    })}

    module.exports = {getAllProduct,testinggetAllProduct}