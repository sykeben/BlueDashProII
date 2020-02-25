// API object.
var api = new TBA();

// Update function (runs every 10 seconds).
function updateDashboard() {

    // Last updated text.
    $('#lastupdated-dash').text(new Date().toLocaleTimeString());

    // Run again.
    setTimeout(updateDashboard, 10000);

}

// Run update function after a couple seconds.
setTimeout(updateDashboard, 2500);