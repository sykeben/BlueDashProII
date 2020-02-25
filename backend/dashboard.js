// Update function.
function updateDashboard() {

    // Run again in 10 seconds.
    setTimeout(updateDashboard, 10000);

}

// Run update to kickoff auto-update.
updateDashboard();