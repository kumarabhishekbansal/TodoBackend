const User=require("../model/UserSchema");

// get individual data by their id

const getData=async(req,res)=>{
    try {
        const {id}=req.query;
        if(!id)
        {
            return res.status(422).json({
                message:"Please insert id for which you want to get the details of data"
            })
        }
        // console.log(("id is",id));
        const itemfound=await User.findById(id);
        if(itemfound)
        {
            const{_id,title,description,isCompleted,createdAt}=itemfound;
            return res.status(200).json({
                _id,title,description,isCompleted,createdAt
            })
        }else{
            return res.status(422).json({
                message:"Item not found"
            })
        }
    } catch (error) {
        console.log("some error occured while getting individual item");
        return res.status(422).json({
            message:"inavlid crendetials",
        })
    }
}


// get all data

const getAllData=async(req,res)=>{
    try {
        const alldata=await User.find();
        if(alldata)
        {
            return res.status(200).json({
                alldata
            })
        }else{
            return res.status(422).json({
                message:"data not found"
            })
        }
    } catch (error) {
        console.log("some error occured while getting all the data");
        return res.status(422).json({
            message:"inavlid crendetials",
        })
    }
}


// add item to todolist

const addItem=async(req,res)=>{
    try {
        const {title,description}=req.body;

        const found=await User.findOne({title});
        if(found)
        {
            return res.status(422).json({
                message:"either title is already created or inavlid crendetials",
            })
        }

        const user=await User.create({title,description});
        await user.save();
        if(user)
        {
            const{_id,title,description,isCompleted,createdAt}=user;
            return res.status(200).json({
                message:"data added successfully",
                _id,title,description,isCompleted,createdAt
            })
        }else{
            return res.status(422).json({
                message:"data not added",
            })
        }
    } catch (error) {
        console.log("some error occured while add the data");
        return res.status(422).json({
            message:"either title is already created or inavlid crendetials",
        })
    }
}


// update item to todolist by their id

const updateItem=async(req,res)=>{
    try {
        const {id}=req.query;
        if(!id)
        {
            return res.status(422).json({
                message:"Please insert id for which you want to update the details of data"
            })
        }
        const data=req.body;
        var updateditem=await User.findByIdAndUpdate(id,data);
        await updateditem.save();
        updateditem=await User.findByIdAndUpdate(id,data);
        if(updateditem)
        {
            const{_id,title,description,isCompleted,createdAt}=updateditem;
            return res.status(200).json({
                message:"data updated successfully",
                _id,title,description,isCompleted,createdAt
            })
        }else{
            return res.status(422).json({
                message:"data not updated",
            })
        }
    } catch (error) {
        console.log("some error occured while updating the data");
        return res.status(422).json({
            message:"inavlid crendetials",
        })
    }
}


// delete item to todolist by their id

const deleteItem=async(req,res)=>{
    try {
        const {id}=req.query;
        if(!id)
        {
            return res.status(422).json({
                message:"Please insert id for which you want to delete the details of data"
            })
        }
        const deleteitem=await User.findByIdAndDelete(id);
        if(deleteitem)
        {
            const{_id,title,description,isCompleted,createdAt}=deleteitem;
            return res.status(200).json({
                message:"data deleted successfully",
                _id,title,description,isCompleted,createdAt
            })
        }else{
            return res.status(422).json({
                message:"data not deleted ,either data not found",
            })
        }
    } catch (error) {
        console.log("some error occured while deleting the data");
        return res.status(422).json({
            message:"inavlid crendetials",
        })
    }
}


// get all completed tasks

const getAllCompleteTasks=async(req,res)=>{
    try {
        const datas=await User.find({isCompleted:true});
        if(datas.length!==0)
        {
            return res.status(200).json({
                datas
            })
        }else{
            return res.status(200).json({
                   message:"There id no tasks which are completed yet...." 
            })
        }
    } catch (error) {
        console.log("some error occured while getting the data");
        return res.status(422).json({
            message:"inavlid crendetials",
        })
    }
}


// get all incompleted tasks

const getAllInCompleteTasks=async(req,res)=>{
    try {
        const datas=await User.find({isCompleted:false});
        if(datas.length!==0)
        {
            return res.status(200).json({
                datas
            })
        }else{
            return res.status(200).json({
                   message:"There id no tasks which are uncompleted.." 
            })
        }
    } catch (error) {
        console.log("some error occured while getting the data");
        return res.status(422).json({
            message:"inavlid crendetials",
        })
    }
}


module.exports={getData,getAllData,addItem,updateItem,deleteItem,getAllCompleteTasks,getAllInCompleteTasks};