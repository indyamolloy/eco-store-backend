import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, title TEXT, price DECIMAL, description TEXT, image TEXT, rating DECIMAL);`;

async function createTable() {
  const result = await query(sqlString);
  console.log(result, "table has been created");
}

createTable();
