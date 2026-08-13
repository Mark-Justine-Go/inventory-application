const {Router} = require("express");
const { getProducts } = require("../controllers/inventoryController");

const inventoryRouter = Router();

inventoryRouter.get("/", getProducts);

module.exports = inventoryRouter;