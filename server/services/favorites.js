const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, city, icon_phrase, temp, today_date
    FROM favorites LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function remove(id){
  const result = await db.query(
    `DELETE FROM favorites WHERE id=${id}`
  );

  let message = 'Error in deleting favorite';

  if (result.affectedRows) {
    message = 'favorite deleted successfully';
  }

  return {message};
}
async function create(favorite){
  const result = await db.query(
    `INSERT INTO favorites 
    (id, city,icon_phrase, temp) 
    VALUES 
    ('${favorite.id}', ${favorite.city}, ${favorite.icon_phrase}, ${favorite.temp})`
  );

  let message = 'Error in creating favorite';

  if (result.affectedRows) {
    message = 'favorite created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,remove,create
}