const express =require("express")

const app = express()
app.set('secret','ewrwef478')

app.use(express.json())
app.use(require('cors')())
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log('App is listening on port 3000')
})