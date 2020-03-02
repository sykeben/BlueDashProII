// Initialize if nonexistant.
if (!localStorage.getItem('BDPII')) {

    // Reset it, just in case.
    localStorage.clear();

    // BDPII meta.
    localStorage.setItem('BDPII', true);
    localStorage.setItem('lastModified', new Date().toLocaleString());

    // User information.
    localStorage.setItem('apiKey', 'None');
    localStorage.setItem('teamNumber', 5980);
    localStorage.setItem('eventKey', '2019misjo');

    // Reload settings.
    loadSettings();

} else {

    // Just load settings.
    loadSettings();

}

// Save function.
function saveSettings() {

    // BDPII meta.
    localStorage.setItem('lastModified', new Date().toLocaleString());
    $('#lastmodified-field').text(localStorage.getItem('lastModified'));

    // User information.
    localStorage.setItem('apiKey', $('#apikey-field').val());
    api.apiKey = $('#apikey-field').val();
    localStorage.setItem('teamNumber', $('#teamnumber-field').val());
    api.eventKey = $('#teamnumber-field').val();
    localStorage.setItem('eventKey', $('#eventkey-field').val());
    api.eventKey = $('#eventkey-field').val();

    // Reload dashboard.
    updateDashboard();

    // Update status.
    $('#status-field').text('Wait...')

    // Reload page after delay.
    setTimeout(function() {
        location.reload();
    }, 1000);

}

// Load function.
function loadSettings() {

    // BDPII meta.
    $('#lastmodified-field').text(localStorage.getItem('lastModified'));

    // User information.
    $('#apikey-field').val(localStorage.getItem('apiKey'));
    api.apiKey = localStorage.getItem('apiKey');
    $('#teamnumber-field').val(Number(localStorage.getItem('teamNumber')));
    api.teamNumber = localStorage.getItem('teamNumber');
    $('#eventkey-field').val(localStorage.getItem('eventKey'));
    api.eventKey = localStorage.getItem('eventKey');

}