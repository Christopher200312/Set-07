const osas = require("express");
require("./config/database");

const port = 2004;
const app = osas();

app.use(osas.json());

// DEFAULT GET
app.get("/", (req, res) => {
  res.status(400).json({
    message: "OSAS SET07 GET SERVER IS READY",
  });
});

app.listen(port, () => {
  console.log("OSAS SET07 SERVER IS READY");
});
