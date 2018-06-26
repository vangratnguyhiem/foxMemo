const mongoose = require('mongoose'); 

mongoose.connect('mongodb://admin:FoxMemo312@ds117711.mlab.com:17711/fox-memo')
.then(() => console.log('Database connected.'))
.catch((error) => console.log('Cannot connect database', error))

const thingSchema = new mongoose.Schema({ 
    name: { type: String, trim: true, unique: true, required: true}, 
    checkOption: { type: Boolean, default: false, required: true }
})

const Thing = mongoose.model('Thing', thingSchema); 

module.exports = { Thing }; 