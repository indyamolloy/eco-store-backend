import query from "../index.js";
import products from "../../products-db.js";

async function populateTable() {
  for (let i = 0; i < products.length; i++) {
    const title = products[i].title;
    const price = products[i].price;
    const description = products[i].description;
    const category = products[i].category;
    const image = products[i].image;
    const rating = products[i].rating;
    const result = await query(
      `INSERT INTO products (title, price, description, category, image, rating) VALUES ($1, $2, $3, $4, $5, $6);`,
      [title, price, description, category, image, rating]
    );
    console.log(result, "Table populated");
  }
}

populateTable();
