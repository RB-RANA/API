
const { query } = require('express');
const Products = require('../Model/ProductSchema')

const getAllProduct = async (req,res)=>{
    const {name,sort,select} = req.query

    const queryOpject ={}

    if(name){
        queryOpject.name = {$regex: name, $options: 'i'};
    }

    let apiData =  Products.find(queryOpject);

    if(sort){
        let sortFixt = sort.split(",").join(" ");
        apiData = apiData.sort(sortFixt)
    }

    if(select){
        let selecttFixt = select.split(",").join(" ");
        apiData = apiData.select(selecttFixt)
    }

    let page = Number(req.query.page) || 1 ;
    let limit = Number(req.query.limit) || 5;

    let skip = (page -1) * limit;

    apiData = apiData.skip(skip).limit(limit);

const mydata = await apiData;

res.status(200).json({mydata,nbHits: mydata.length})
};


    module.exports = {getAllProduct}