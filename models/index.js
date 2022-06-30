import query from "../db/index.js";

export async function getAllProducts() {
  const sqlString = `SELECT * FROM products ORDER BY id;`;
  const response = await query(sqlString);
  return response.rows;
}
