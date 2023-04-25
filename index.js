const express=require('express')
const app=express()
app.use(express.json())
const port=3000
app.use('/',require('./Routes/index'))

app.listen(port,()=>{
    console.log(`your listening on port  ${port}`)
})

