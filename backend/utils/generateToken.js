import jwt from 'jsonwebtoken';

const genrateToken = (id, res) => {
    const token = jwt.sign({id}, process.env.JWT_SEC, {
        expiresIn: "15d",
    });
    
    res.cookie("token",token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true,
        smaeSite: "strict",
    });
};

export default genrateToken;