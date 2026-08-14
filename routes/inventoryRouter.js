const {Router} = require("express");
const { getProducts, modifyProduct } = require("../controllers/inventoryController");

const inventoryRouter = Router();

inventoryRouter.get("/", getProducts);
inventoryRouter.post("/", modifyProduct);


module.exports = inventoryRouter;