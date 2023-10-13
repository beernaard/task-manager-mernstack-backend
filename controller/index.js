const taskSchema = require('../model/schema')

const getAllTask = async (req,res)=>{
    try {
        const task = await taskSchema.find({})
        res.status(200).json({task})
    } catch (error) {
        console.log(error)
    }
}

const createTask = async(req,res)=>{
   try {
     const task = await taskSchema.create(req.body)
     res.status(200).json({task})
   } catch (error) {
    console.log(error)
   }
}

const getOneTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await taskSchema.findById({_id:taskID})
        !task? res.status(404).json({message:`no task with id: ${taskID}`}):res.status(200).json({task})
    } catch (error) {
        console.log(error)
    }
}

const PatchTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await taskSchema.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        !task? res.status(404).json({message:`no task with id: ${taskID}`}):res.status(200).json({task})
    } catch (error) {
        console.log(error)
    }
}

const DeleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await taskSchema.findByIdAndDelete({_id:taskID})
        !task? res.status(404).json({message:`no task with id: ${taskID}`}):res.status(200).json({task})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllTask,
    createTask,
    getOneTask,
    PatchTask,
    DeleteTask,
}