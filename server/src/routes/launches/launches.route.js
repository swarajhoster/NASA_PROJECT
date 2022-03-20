const express = require("express");

const launchesRouter = express.Router();

const { httpGetAllLaunches, httpNewLaunch, httpAbortLaunch } = require("./launches.controller");


launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
