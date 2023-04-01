const express = require("express");
const cors = require("cors");
const app = express();

//i have use middleware with the help of app.use
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/form-data", (req, res) => {

  console.log(req.body);
  res.json(req.body);
});

// app.get("/", (req, res) => {
//   console.log("Heelo Wolrd");
//   res.send("Hello from the server");
// }); 

app.listen(8000, () => console.log(`App is running`));
