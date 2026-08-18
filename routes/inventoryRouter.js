const {Router} = require("express");
const multer = require("multer");
const { getProducts, modifyProduct, addProduct } = require("../controllers/inventoryController");

const inventoryRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({storage:storage});

inventoryRouter.get("/", getProducts);
inventoryRouter.post("/", modifyProduct);
inventoryRouter.post("/add", upload.single("productImage"),addProduct);


module.exports = inventoryRouter;