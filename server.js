const express = require('express')


const port =  3000


const app = express()


app.use(express.json())

app.get ("/", (request,response)=>{

    response.send ("This is my first GET method!")
})


app.post ('/testpost', (request,response)=>{

    response.send ("Message by you : " + message)
})

app.listen(port, () => {
    console.log('Server is up on port  ' + port)
})

