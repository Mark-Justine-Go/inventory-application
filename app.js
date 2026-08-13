const express = require("express");
const path = require("node:path");
const inventoryRouter = require("./routes/inventoryRouter");

const app = express();


//live reload
const livereload = require('livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
  path.join(__dirname, 'public'),
  path.join(__dirname, 'views')
]);

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//----------------------------------------------


const PORT = 3000;
const assetPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetPath));

app.use(express.urlencoded({extended: true}));
app.use("/inventory", inventoryRouter);

app.listen(PORT, (err) => {
    if(err){
        throw err;
    }

    console.log(`Live: http://localhost:${PORT}`);
})