const db = require('../data/database/db'); 
const mailer = require('../utils/nodemailer_helper'); 
const dateTime = require('../utils/date_time'); 
const bcrypt = require('bcrypt');

async function registerAccount(req, res, next){
    const queryStr = "select user_name from account where user_email = $1"
    const rows = await db.query(queryStr, [req.body.email]);
    if(rows.length != 0) return res.status(200).send("Email already exist");

    const queryStr2 = "insert into register_account (user_name, user_email, user_password, join_since) values ($1, $2, $3, $4)"
    await db.query(queryStr2, [req.body.name, req.body.email, req.body.password, dateTime.currentDateDMY()]);

    mailer.sendVerificationEmail(req.body.email, "http://localhost:3000/register/confirmEmail?email=" + req.body.email);
    res.status(200).send("Check your email");
}

async function confirmEmail(req, res){
    const emailConfirm = req.query.email;
    const queryStr = "select * from register_account where user_email = $1"
    const rows = await db.query(queryStr, [emailConfirm]);

    const hashedPassword = await bcrypt.hash(rows[0].user_password, 10);
    const queryStr2 = "insert into account (user_name, user_email, user_password, watched_num, favorite_num, join_since) values ($1, $2, $3, $4, $5, $6)"
    await db.query(queryStr2, [rows[0].user_name, emailConfirm, hashedPassword, 0, 0, rows[0].join_since]);

    const queryStr3 = "delete from register_account where user_email = $1"
    await db.query(queryStr3, [emailConfirm]);

    res.status(200).send("Email verified, account created");
}

module.exports = {
    registerAccount : registerAccount, 
    confirmEmail : confirmEmail
}