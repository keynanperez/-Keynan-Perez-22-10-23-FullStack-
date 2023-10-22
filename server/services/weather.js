const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, city, temp, today_date
    FROM weather LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function create(weather) {
  const result = await db.query(
    `INSERT INTO weather 
    (id, city, temp) 
    VALUES 
    ('${weather.id}', ${weather.city}, ${weather.temp})`
  );

  let message = "Error in creating weather";

  if (result.affectedRows) {
    message = "weather created successfully";
  }

  return { message };
}
module.exports = {
  getMultiple,
  create,
};
