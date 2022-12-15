const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3000;
mongoose = require("mongoose");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Prueba");
});
routerApi(app)


app.listen(port, () => {
  console.log(`prueba app listening on port  http://localhost:${port}`);
});

