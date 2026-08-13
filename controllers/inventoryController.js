const db = require("../db/queries");

async function getProducts(req,res){
    const products = await db.getAllProducts();
    console.log(products);
    res.render("inventory", {products});
}

module.exports = {
    getProducts
}