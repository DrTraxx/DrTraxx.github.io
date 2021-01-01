//vehicleTypes
async function getVehicleTypes() {
  if(!localStorage.aVehicleTypesNew || JSON.parse(localStorage.aVehicleTypesNew).lastUpdate < (new Date().getTime() - 5 * 1000 * 60)) {
    await $.getJSON("https://drtraxx.github.io/vehicletypes.json").done(data => localStorage.setItem('aVehicleTypesNew', JSON.stringify({lastUpdate: new Date().getTime(), value: data})) );
  }
  return JSON.parse(localStorage.aVehicleTypesNew).value;
}

//alliance buildings
async function getAllianceBuildings() {
  if(!localStorage.aAllianceBuildings || JSON.parse(localStorage.aAllianceBuildings).lastUpdate < (new Date().getTime() - 5 * 1000 * 60) || JSON.parse(localStorage.aAllianceBuildings).userId != user_id) {
    await $.getJSON('/api/alliance_buildings').done(data => localStorage.setItem('aAllianceBuildings', JSON.stringify({lastUpdate: new Date().getTime(), value: data, userId: user_id})) );
  }
  return JSON.parse(localStorage.aAllianceBuildings).value;
}

//alliance infos
async function getAllianceInfos() {
  if(!localStorage.aAlliance || JSON.parse(localStorage.aAlliance).lastUpdate < (new Date().getTime() - 5 * 1000 * 60) || JSON.parse(localStorage.aAlliance).userId != user_id) {
    await $.getJSON('/api/allianceinfo').done(data => localStorage.setItem('aAlliance', JSON.stringify({lastUpdate: new Date().getTime(), value: data, userId: user_id})) );
  }
  return JSON.parse(localStorage.aAlliance).value;
}

//missions
async function getMissions() {
  if(!localStorage.aMissions || JSON.parse(localStorage.aMissions).lastUpdate < (new Date().getTime() - 5 * 1000 * 60)) {
    await $.getJSON('/einsaetze.json').done(data => localStorage.setItem('aMissions', JSON.stringify({lastUpdate: new Date().getTime(), value: data})) );
  }
  return JSON.parse(localStorage.aMissions).value;
}

//vehicles
async function getVehicles() {
  if(!sessionStorage.aVehicles || JSON.parse(sessionStorage.aVehicles).lastUpdate < (new Date().getTime() - 5 * 1000 * 60) || JSON.parse(sessionStorage.aVehicles).userId != user_id) {
    await $.getJSON('/api/vehicles').done(data => sessionStorage.setItem('aVehicles', JSON.stringify({lastUpdate: new Date().getTime(), value: data, userId: user_id})) );
  }
  return JSON.parse(sessionStorage.aVehicles).value;
}

//vehicle states
async function getVehicleStates() {
  if(!sessionStorage.aStates || JSON.parse(sessionStorage.aStates).lastUpdate < (new Date().getTime() - 5 * 1000 * 60)) {
    await $.getJSON('/api/vehicle_states').done(data => sessionStorage.setItem('aStates', JSON.stringify({lastUpdate: new Date().getTime(), value: data})) );
  }
  return JSON.parse(sessionStorage.aStates).value;
}

//buildings
async function getBuildings() {
  if(!sessionStorage.aBuildings || JSON.parse(sessionStorage.aBuildings).lastUpdate < (new Date().getTime() - 5 * 1000 * 60) || JSON.parse(sessionStorage.aBuildings).userId != user_id) {
    await $.getJSON('/api/buildings').done(data => sessionStorage.setItem('aBuildings', JSON.stringify({lastUpdate: new Date().getTime(), value: data, userId: user_id})) );
  }
  return JSON.parse(sessionStorage.aBuildings).value;
}

//credits
async function getCredits() {
  if(!sessionStorage.aCredits || JSON.parse(sessionStorage.aCredits).lastUpdate < (new Date().getTime() - 5 * 1000 * 60) || JSON.parse(sessionStorage.aCredits).userId != user_id) {
    await $.getJSON('/api/credits ').done(data => sessionStorage.setItem('aCredits', JSON.stringify({lastUpdate: new Date().getTime(), value: data, userId: user_id})) );
  }
  return JSON.parse(sessionStorage.aCredits).value;
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
