const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json())

// 
let productsRouter = require("./routes/products")
let commentsRouter = require("./routes/comments")
let vehiclesRouter = require("./routes/vehicles")
let contactsRouter = require("./routes/contacts")

// using routes at router folder
app.use(productsRouter);
app.use(commentsRouter);
app.use(vehiclesRouter);
app.use(contactsRouter);





app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
