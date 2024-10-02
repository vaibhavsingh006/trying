const express = require('express');
const userModel = require('./models/user')
const app = express();


app.get('/', async function (req, res) {
    const user = await userModel.findOne()
    console.log(user)
    res.send(`${user.fullname} hh`)
    // res.send(`hh`)
});

app.listen(3001, () => {
    console.log('connect')
})