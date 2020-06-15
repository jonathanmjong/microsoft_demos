const path = require('path')

const express = require('express')

const app = express()

publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.listen(3000, () => {
    console.log('Server running on port 3000')
})