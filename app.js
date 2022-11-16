const express = require('express')
// const file = requiere('./package.json')

const app = express()

app.get('/profile', (req, res)=>{
    res.json({
        name: "Jose Carlos Delgado",
        age: 35,
        country: "Ecuador"
    })
})

app.post('/profile', (req, res)=>{
    res.json(["Google", 
                "Facebook", 
                "Globant"
    ])
})

app.patch('/profile', (req, res)=>{
    res.json(["Code", 
                "3D Design", 
                "Structures"
    ])
})
const port = 3000
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})