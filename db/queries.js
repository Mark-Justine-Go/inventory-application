const pool = require("./pool");

async function getAllProducts(){
    const {rows} = await pool.query("SELECT * FROM products");
    return rows;
}

async function modifyProductQuery(id, price, quantity, description){
    const query = "UPDATE products SET price = $2, quantity = $3, description = $4 WHERE id = $1";
    const values = [id, price, quantity, description];
    await pool.query(query,values);
}

async function removeProduct(id){
    const query = "DELETE from products WHERE id = $1";
    const values = [id];
    await pool.query(query,values);
}

module.exports = {
    getAllProducts,
    modifyProductQuery,
    removeProduct,
}