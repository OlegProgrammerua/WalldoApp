const Leader = require('../model/Leader')


module.exports.postLeaders = async (req,res)=>{
    try{
        const {name, time} = req.body
        const newLeader = new Leader({
            name:name,
            time:time
    })

    await newLeader.save()
    res.json({message:"The leader was created", leader:newLeader})

    }

    catch(error){
        res.json({message:"The leader was not created", error:error})

    }
    

    
}

module.exports.getLeaders = async(req,res)=>{
    try{
        const leaders = await Leader.find()
        res.json({message:"The getiing leaders was succesfully",leaders:leaders})
    }
    catch(error){
        res.json({message:"Cannot get leaders", error:error})
    }
}