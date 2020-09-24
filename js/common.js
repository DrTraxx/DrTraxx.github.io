function singleBuilding(id) {
  var returnValue = {};
  $.getJSON("/api/buildings" + id, function(data) {
    returnValue = data;
  });
  return returnValue;
}

function singleVehicle(id) {
  var returnValue = {};
  $.getJSON("/api/vehicles" + id, function(data) {
    returnValue = data;
  });
  return returnValue;
}
