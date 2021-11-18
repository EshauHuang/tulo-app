const express = require("express");

const app = express();

app.use(express.static("build"));

app.listen(4444, () => {
  console.log("listen port 4444");
});
