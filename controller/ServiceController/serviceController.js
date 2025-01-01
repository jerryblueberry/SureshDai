const Service = require('../../models/ServiceModel');
const asyncHandler = require('express-async-handler')

//  Needs validation middleware only admin 

const addServices = asyncHandler(async(req,res) => {
    try {
        const {name,description,duration}  = req.body;
        const service = new Service({
            name,
            description,
            duration,
        });
        await service.save();
        res.status(200).json({message:"Service added Successfully"});       
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})

module.exports = {addServices};