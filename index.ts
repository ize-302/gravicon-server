var request = require("request");
import express from "express";
const app = express();
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT;

var corsOptions = {
  origin: "*",
};

app.get("/", cors(corsOptions), (req, res) => {
  const { url } = req.query;
  var options = {
    uri: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.${url}&size=32`,
    encoding: "binary",
  };

  request.get(options, function optionalCallback(e: any, resp: any, body: any) {
    const prefix = "data:" + resp.headers["content-type"] + ";base64,";
    var img = new Buffer.from(body.toString(), "binary").toString("base64");
    res.send({ data: prefix + img });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
