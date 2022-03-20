const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.route.js");
const launchesRouter = require("./routes/launches/launches.route.js");

const app = express();

//Cors Setup
var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// App Uses
// app.use(cors(corsOptions));
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

//App routes
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

//React-build optimization
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
