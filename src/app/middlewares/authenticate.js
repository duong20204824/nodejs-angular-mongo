import jwt from 'jsonwebtoken'


const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;

    } catch (err) {
        console.log(err)
        return res.status(401).send("Invalid Token");
    }
    return next();
};

const isAdmin = (req, res, next) => {


    if (req.user.role === "admin") {
        next();
        return;
    }
    else {
        res.status(403).send({ message: "Required Admin Role!" });
        return;
    }

}


const authenticate = {
    verifyToken,
    isAdmin
};
export default authenticate;