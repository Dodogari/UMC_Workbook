// const express = require('express')   // common JS
import express from 'express'          // ES6

const app = express()
const port = 3000

// router setting
app.use('/temp', tempRouter);

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});