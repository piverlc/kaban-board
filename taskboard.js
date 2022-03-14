//Geolocation Script

window.onload = function () {
  updateCount();
  let x = document.getElementById("task-location");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    x.innerHTML =
      "Location Details: " +
      "Latitude: " +
      +position.coords.latitude +
      " ,  Longitude: " +
      position.coords.longitude;
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred.";
        break;
    }
  }
};

//Drag and Drop Script

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.currentTarget.appendChild(document.getElementById(data));
  updateCount();
}

//Count Script

function updateCount() {
  let backlogDiv = document.getElementById("backlog");

  sessionStorage.todoCount = backlogDiv.children.length - 1;

  document.getElementById("backlog-count").innerHTML =
    " (" + sessionStorage.todoCount + ")";

  let devDiv = document.getElementById("dev");

  sessionStorage.devCount = devDiv.children.length - 1;

  document.getElementById("dev-count").innerHTML =
    " (" + sessionStorage.devCount + ")";

  let progressDiv = document.getElementById("progress");

  sessionStorage.inprogressCount = progressDiv.children.length - 1;

  document.getElementById("progress-count").innerHTML =
    " (" + sessionStorage.inprogressCount + ")";

  let doneDiv = document.getElementById("done");

  sessionStorage.doneCount = doneDiv.children.length - 1;

  document.getElementById("done-count").innerHTML =
    " (" + sessionStorage.doneCount + ")";
}
