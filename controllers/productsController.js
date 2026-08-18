const db = require("../db/queries");

async function getProducts(req, res){
    const products = await db.getAllProductsQuery();
    const categories = await db.getCategoriesQuery();
    
    res.render("products.ejs", {products, categories});
}

module.exports = {
    getProducts,
}

