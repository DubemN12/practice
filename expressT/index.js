const express = require('express') // Requires the express module

const app = express()

app.listen(3000,() =>{
    console.log('App listening to port 3000')
})


// The allows us to make API's
// This is also how routing works
app.get('/',(req, res) =>{
    res.json({name: 'Dubem Nwachukwu'})
})

app.get('/about', (req,res) =>{
    res.json({
        name: 'The End'
    })
})

app.get('/contact', (req, res) =>{
    res.json(
        {name: 'Ledo Green'}
    )
})