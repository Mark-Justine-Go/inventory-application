const express = require("express");
const path = require("node:path");
const inventoryRouter = require("./routes/inventoryRouter");
const productsRouter = require("./routes/productsRouter");

const app = express();


const PORT = 3000;
const assetPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetPath));

app.use(express.urlencoded({extended: true}));
app.use("/inventory", inventoryRouter);
app.use("/", productsRouter);

app.listen(PORT, (err) => {
    if(err){
        throw err;
    }

    console.log(`Live: http://localhost:${PORT}`);
})