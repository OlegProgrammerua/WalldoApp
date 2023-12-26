const Coordinates = require('../model/Coordinates')

module.exports.create_coordinate = async (req,res)=>{
    try{
        const {x, y, found, img, name } = req.body;
    const newCoordinates = new Coordinates({
        x:x,
        y:y,
        found:found,
        img:img,
        name:name
    })

    await newCoordinates.save()
    res.json({message:"The coordinates was added"})
    }

    catch(error){
        console.log(error)
    }
}

module.exports.get_coordinates = async(req,res)=>{
    try{
        const coordinates = await Coordinates.find()
        res.json({coordinates:coordinates})
    }
    catch(error){
        res.json({error:error})
    }
}

module.exports.get_coordinates_one = async(req,res)=>{
    try{
        const {id} = req.params;
        const foundCoordinates = await Coordinates.findById(id)
        res.json({coordinates:foundCoordinates})
    }
    catch(error){
        res.json({error:error})
    }
    

    
    
}
