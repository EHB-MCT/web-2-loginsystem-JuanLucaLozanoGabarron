const express = require('express')
const app = express()
const cors = require('cors')
let port = 3000

let users = [];

app.use(express.urlencoded({
    extended: false
}));
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
});


//Register
app.post('/register', (req, res) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.email) {
            res.status(400).send('They missed username, email or password')
            return;
        }

        let user = users.find(el => el.email == req.body.email)


        if (user) {
            res.status(400).send('They missed username, email or password')
            return;

        }

        let newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }

        users.push(newUser)

        console.log(users)
        res.status(200).send(`${req.body.username} successfuly added`);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        })
    }
});


//Login

app.post('/login', (req, res) => {

    try {

        if (!req.body.email || !req.body.password) {
            res.status(400).send('Place enter a valid username and password')
            return;
        }


        let email = users.find(el => el.email == req.body.email)
        let password = users.find(el => el.password == req.body.password)

        if (!email) {
            res.status(400).send('User does not exist')
            return;
        }
        if (email && !password) {
            res.status(400).send(`Place enter a valid password for ${req.body.email}`)
            return;
        }

        res.status(200).send(`${email.username} successfuly logged in`);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        })
    }
});