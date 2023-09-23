const express = require("express");
const app = express();


const peopleRouter = require("./router/people");
const loginRouter = require("./router/auth");

app.use(express.static("./methods-public"));
// to parse form data
app.use(express.urlencoded({ extended: false }));
// to parse incoming json
app.use(express.json());
// login router
app.use("/login", loginRouter)
// people router
app.use("/api/people", peopleRouter);




app.listen(5000, (req, res) => {
  console.log("server is listen to port 5000");
});
