const express = require('express')
    
const dev = process.env.NODE_ENV !== 'production'
    
const server = express()
    
server.get('/', (req, res) => {
    console.log("_")
    res.json({
        ok: true
    })
})
    
server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
})