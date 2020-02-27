// API object.
var api = new TBA();

// Variables.
let updateCount = 0;
let eventKey = 'None';
let lastMatchKey = 'None';
let nextMatchKey = 'None';

// Team autobolding function.
function autoBold(element) {
    if ($(element).text() == String(api.teamNumber)) {
        $(element).css('font-weight', 'bold');
    } else {
        $(element).css('font-weight', 'inherit');
    }
}

// Update function (runs every 10 seconds).
function updateDashboard() {

    // Event Key.
    api.get(`/team/frc${api.teamNumber}/events/${new Date().getFullYear()}/keys`, function(data) {
        eventKey = data[0];
        $('#eventkey').text(eventKey);
    });

    // Event Status (Match Keys, Rank, Etc).
    api.get(`/team/frc${api.teamNumber}/event/${eventKey}/status`, function(data) {
        $('#rank').text(data.qual.ranking.rank);
        lastMatchKey = data.last_match_key;
        nextMatchKey = data.next_match_key;
    });

    // Last Match.
    api.get(`/match/${lastMatchKey}/simple`, function(data) {

        // Time.
        $('#last-time').text(new Date(data.time).toLocaleTimeString());

        // Alliance team numbers.
        $('#last-red-1').text(data.alliances.red.team_keys[0].replace('frc', ''));
        $('#last-red-2').text(data.alliances.red.team_keys[1].replace('frc', ''));
        $('#last-red-3').text(data.alliances.red.team_keys[2].replace('frc', ''));
        $('#last-blue-1').text(data.alliances.blue.team_keys[0].replace('frc', ''));
        $('#last-blue-2').text(data.alliances.blue.team_keys[1].replace('frc', ''));
        $('#last-blue-3').text(data.alliances.blue.team_keys[2].replace('frc', ''));

        // Alliance team formatting.
        autoBold('#last-red-1');
        autoBold('#last-red-2');
        autoBold('#last-red-3');
        autoBold('#last-blue-1');
        autoBold('#last-blue-2');
        autoBold('#last-blue-3');

        // Scores.
        $('#last-red-score').text(data.alliances.red.score);
        $('#last-blue-score').text(data.alliances.blue.score);

        // Scores formatting.
        if (data.alliances.red.score > data.alliances.blue.score) {
            $('#last-red-score').css('font-weight', 'bold');
            $('#last-blue-score').css('font-weight', 'inherit');
        } else {
            $('#last-red-score').css('font-weight', 'inherit');
            $('#last-blue-score').css('font-weight', 'bold');
        }

    });

    // Next Match.
    api.get(`/match/${nextMatchKey}/simple`, function(data) {

        // Time.
        $('#next-time').text(new Date(data.time).toLocaleTimeString());

        // Alliance team numbers.
        $('#next-red-1').text(data.alliances.red.team_keys[0].replace('frc', ''));
        $('#next-red-2').text(data.alliances.red.team_keys[1].replace('frc', ''));
        $('#next-red-3').text(data.alliances.red.team_keys[2].replace('frc', ''));
        $('#next-blue-1').text(data.alliances.blue.team_keys[0].replace('frc', ''));
        $('#next-blue-2').text(data.alliances.blue.team_keys[1].replace('frc', ''));
        $('#next-blue-3').text(data.alliances.blue.team_keys[2].replace('frc', ''));

        // Alliance team formatting.
        autoBold('#next-red-1');
        autoBold('#next-red-2');
        autoBold('#next-red-3');
        autoBold('#next-blue-1');
        autoBold('#next-blue-2');
        autoBold('#next-blue-3');

    });

    // Last updated text & update counter.
    updateCount++;
    $('#lastupdated-dash').text(new Date().toLocaleTimeString());
    $('#updatecount').text(String(updateCount));
    if (updateCount > 1 || updateCount == 0) { $('#updatecount-suffix').show(); }
    else { $('#updatecount-suffix').hide(); }

    // Run again.
    setTimeout(updateDashboard, 10000);

}

// Run update function after a couple seconds.
setTimeout(updateDashboard, 2500);