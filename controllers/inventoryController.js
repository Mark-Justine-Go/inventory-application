const db = require("../db/queries");

async function getProducts(req,res){
    const products = await db.getAllProductsQuery();
    const categories = await db.getCategoriesQuery();

    res.render("inventory", {products, categories});
}

async function addProduct(req, res){
    const {productName , price , quantity, description} = req.body;

    if(!req.file){
        return res.status(400).send("no product image has been uploaded");
    }

    const imgBuffer = req.file.buffer;
    const mimeType = req.file.mimetype;

    await db.addProductQuery(productName, price, quantity, description, imgBuffer, mimeType);
    
    const products = await db.getAllProductsQuery();
    const categories = await db.getCategoriesQuery();
    res.render("inventory", {products, categories});
}

async function modifyProduct(req,res){
    const {type, id, price, quantity, description, category} = req.body;

    if(type === "save"){
        await db.modifyProductQuery(id, price, quantity, description, category);
    }else{
        await db.removeProductQuery(id);
    }

    const products = await db.getAllProductsQuery();
    const categories = await db.getCategoriesQuery();
    res.render("inventory", {products, categories});
}

module.exports = {
    getProducts,
    modifyProduct,
    addProduct
}