const jwt = require("jsonwebtoken");
const { users } = require('.././../store');
//import user json

 const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split("Bearer ")[1];

    if(token) {
        jwt.verify(token, 'secret', (err, decoded) => {
            if(err) {
                const message = "Header verify failed";
                return res.status(403).send({ message });
            } else {
                const user = users.find(user => user.id === decoded.id)
                if(!user) {
                    return res.status(404).json({ 'message': 'User Not Found' });
                }
                req.user = user;
                req.message = "Found the user succcessfully, user has valid login token";
                next();
            }
        });
    } else {
        const message = "Authorization header not found";
        return res.status(401).send({ message});
    }
};

module.exports = {
    verifyToken: verifyToken
}