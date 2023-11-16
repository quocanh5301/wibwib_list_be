const db = require('../data/database/db'); 

const offSet = 10;

async function getManganimeList(req, res)  {
    const page = req.query.page;
    const queryStr = "select * from manganime limit $1 offset $2"
    const rows = await db.query(queryStr, [offSet, offSet*page]);
    console.log(rows[0].title);
    res.send(JSON.stringify(rows));
}
 
async function getFavorite(req, res){
    
}

module.exports = {
    getManganimeList : getManganimeList,
    getFavorite : getFavorite
}