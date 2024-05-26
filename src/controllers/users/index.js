const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { users } = require('../../store');
const uuid4 = require("uuid4");

const register = async (req, res) => {
    try {
        const user = users.find(user => user.email === req.body.email)
        if(!user) {
            const hashPassword = await bcrypt.hash(req.body.password, 8);
            users.push({
                id: uuid4(),
                name: req.body.name,
                email: req.body.email,
                password: hashPassword
            });
            return res.status(200).send({ 'message': 'User registered' });
        } else {
            return res.status(400).send({ "error": "User already present" });
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

const login = (req, res) => {
    try {
        const { email, password } = req.body
        const user = users.find(user => user.email === email && bcrypt.compareSync(password, user.password))
        if(!user) {
            return res.status(401).send({message: "Invalid Password/Email"});
        } else {
            let token = jwt.sign({id: user.id}, 'secret', { expiresIn: 86400 })
            return res.status(200).send({
                token: token
            })
        }
    } catch (err) {
        return res.status(500).send(err)
    }
} 

module.exports = {
    register: register,
    login: login
}