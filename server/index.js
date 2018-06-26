const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const { Thing } = require('./Thing'); 

const parser= bodyParser.json(); 
const app = express(); 

app.use(cors()); 
app.use(parser); 

app.get('/', (req, res) => {
    Thing.find({}).sort({_id: 1})
    .then( things => res.send({ success: true, things }))
    .catch(error => res.send({ success: false, error: error.message }))
})

app.post('/', (req, res) => { 
    const { name, checkOption } = req.body; 
    const thing = new Thing({ name, checkOption }); 
    thing.save()
    .then(thing => res.send({ success: true, thing }))
    .catch(error => res.send({ success: false, error: error.message }))
    
})

app.delete('/:_id', (req, res) => { 
    Thing.findByIdAndRemove(req.params._id)
    .then(thing => { 
        if(!thing) throw new Error('Invalid Informaton')
        res.send({ success: true, thing }); 
    })
    .catch(error => res.send({ success: false, error: error.message }))
})

app.put('/:_id', (req, res) => { 
    const { checkOption } = req.body; 
    Thing.findByIdAndUpdate(req.params._id, { checkOption }, { new: true })
    .then(thing => { 
        if(!thing) throw new Error('Invalid info'); 
        res.send({ success: true, thing }); 
    })
    .catch(error => res.send({ success: false, error: error.message }))
})

app.listen(process.env.PORT || 3000, () => console.log('Server started.')); 