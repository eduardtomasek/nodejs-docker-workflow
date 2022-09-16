const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({
        data: {
            message: 'Hello world!',
            exclamation: '!',
        },
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))