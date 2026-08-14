const db = require("../db/queries");

async function getProducts(req,res){
    const products = await db.getAllProducts();
    res.render("inventory", {products});
}

async function modifyProduct(req,res){
    const {type, id, price, quantity, description} = req.body;

    if(type === "save"){
        await db.modifyProductQuery(id, price, quantity, description);
    }else{
        await db.removeProduct(id);
    }

    const products = await db.getAllProducts();
    res.render("inventory", {products});
}

module.exports = {
    getProducts,
    modifyProduct
}