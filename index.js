// import + inisialisasi express
const express = require('express')
const app = express()

// pemanggilan port
const port = 3000
app.listen(port, function(){
    console.log(`Server Running on port ${port}`)
})

// set template engine
app.set('view engine', 'hbs')
app.use('/public', express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:false}))
// ===============================================================
// End Point
// get
app.get('/home', function(req, res){
    res.render('index')
})
app.get('/add-project', function(req, res){
    res.render('add-project')
})
// app.get('/detail-project', function(req, res){
//     res.render('detail-project')
// })
app.get('/detail-project/:id', function(req, res){
    let id = req.params.id
    res.render('detail-project', {id:id})
})
app.get('/contact-me', function(req, res){
    res.render('contact')
})
app.get('/change-project', function(req, res){
    res.render('change-project')
})
// post
app.post('/add-project')