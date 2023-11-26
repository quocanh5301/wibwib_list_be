const jwt = require("jsonwebtoken");

//Generate an access token and a refresh token for this database user
exports.jwtTokens = ({ id, user_name, user_email, watched_num, favorite_num, join_since, image}) => {
    console.log("secret " + process.env.ACCESS_TOKEN_SECRET);
    const date = join_since.getTime();
    const user = { id, user_name, user_email, watched_num, favorite_num, date, image}; 
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15 days' });
    return ({ accessToken, refreshToken });
}
