//api requests
async function getApi(type) {
  var url = "";
  switch(type) {
    case "credits": url = "/api/credits";
      break;
    case "buildings": url = "/api/buildings";
      break;
    case "vehicleStates": url = "/api/vehicle_states";
      break;
    case "vehicles": url = "/api/vehicles";
      break;
    case "allianceInfo": url = "/api/allianceinfo";
      break;
    case "allianceBuildings": url = "/api/alliance_buildings";
      break;
  }
  var returnValue = await $.getJSON(url);
  return returnValue;
}

//vehicleTypes
async function getVehicleTypes() {
  if(!localStorage.aVehicleTypesNew || JSON.parse(localStorage.aVehicleTypesNew).lastUpdate < (new Date().getTime() - 5 * 1000 * 60)) {
    await $.getJSON("https://api.lss-cockpit.de/de_DE/vehicletypes.json").done(data => localStorage.setItem('aVehicleTypesNew', JSON.stringify({lastUpdate: new Date().getTime(), value: data})) );
  }
  return JSON.parse(localStorage.aVehicleTypesNew).value;
}

//missions
async function getMissions() {
  if(!localStorage.aMissions || JSON.parse(localStorage.aMissions).lastUpdate < (new Date().getTime() - 5 * 1000 * 60)) {
    await $.getJSON('/einsaetze.json').done(data => localStorage.setItem('aMissions', JSON.stringify({lastUpdate: new Date().getTime(), value: data})) );
  }
  return JSON.parse(localStorage.aMissions).value;
}

//single api requests
async function singleBuilding(id) {
  var returnValue = {};
  await $.getJSON("/api/buildings/" + id, function(data) {
    returnValue = data;
  });
  return returnValue;
}

async function singleVehicle(id) {
  var returnValue = {};
  await $.getJSON("/api/vehicles/" + id, function(data) {
    returnValue = data;
  });
  return returnValue;
}

async function singleAllianceBuilding(id) {
  var returnValue = {};
  await $.getJSON("/api/alliance_buildings/"+id, function(data) {
    returnValue = data;
  });
  return returnValue;
}
