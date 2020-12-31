// @version      1.0.1

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
