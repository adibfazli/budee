const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saveDataSchema = new Schema ({
    
    
},{
    timestamps : true
})
module.exports = mongoose.model('SaveData' , saveData);