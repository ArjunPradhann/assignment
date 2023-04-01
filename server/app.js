const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/form-data", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(8000, () => console.log(`App is running`));
