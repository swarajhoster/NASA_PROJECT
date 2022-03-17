// const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch("http://localhost:8000/planets");
  return await response.json();
}

async function httpGetLaunches() {}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
