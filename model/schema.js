const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        require:[true, 'must provide a task'],
        trim:true,
        maxlength:[30, 'task can not be more than 30 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task',taskSchema)