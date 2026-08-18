const pool = require("./pool");

async function getAllProductsQuery(){
    const {rows} = await pool.query("SELECT * FROM products");
    return rows;
}

async function addProductQuery(productName, price, quantity, description, imgBuffer, mimetype){
    const query = "INSERT INTO products (category_id, product_name, price, quantity, description, image, mime_type) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    const values = [1, productName, price, quantity, description, imgBuffer, mimetype];

    await pool.query(query,values);
}

async function modifyProductQuery(id, price, quantity, description, category){
    const query = "UPDATE products SET price = $2, quantity = $3, description = $4 , category_id = $5 WHERE id = $1";
    const values = [id, price, quantity, description, category];
    await pool.query(query,values);
}

async function removeProductQuery(id){
    const query = "DELETE from products WHERE id = $1";
    const values = [id];
    await pool.query(query,values);
}

async function getCategoriesQuery(){
    const {rows} = await pool.query("SELECT * from categories");
    return rows;
}

async function addCategoryQuery(category){
    const query = "INSERT INTO categories (name) VALUES ($1)";
    const values = [category];
    await pool.query(query,values);
}

module.exports = {
    getAllProductsQuery,
    modifyProductQuery,
    removeProductQuery,
    addProductQuery,
    getCategoriesQuery,
    addCategoryQuery,
}