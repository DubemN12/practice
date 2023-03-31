const express = require('express') // Requires the express module

const app = express()


// The allows us to make API's
// This is also how routing works
app.get('/',(req, res) =>{
    //res.json({name: 'Dubem Nwachukwu'})
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req,res) =>{
    res.json({
        name: 'The End'     
    })
    res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (req, res) =>{
    res.json(
        {name: 'Ledo Green'}
    )
    res.sendFile(__dirname + 'contact.html')
})

app.get('/bgd', (res,req) =>{
    res.use("Check Color")
})

app.use(express.static('public'))

app.listen(3000,() =>{
    console.log('App listening to port 3000')
})