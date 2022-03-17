const http = require("http");

const app = require("./app.js");
const { loadPlanetsData } = require("./Models/planets.model.js");
const PORT = 8000;
const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening to port http://localhost:8000`);
  });
}

startServer();

