const mongoose = require('mongoose')

const connectDB = (url)=>{
    return mongoose.connect(url)
    .then(()=>console.log("CONENCTED TO DATABASE..."))
    .catch((error)=>console.log(error))
}

module.exports = connectDB