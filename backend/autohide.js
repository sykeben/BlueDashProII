// Initialization.
let timer;
let length = 1000;

// Page start.
$('.auto-hide').addClass('show');
timer = setTimeout(function() {
    $('.auto-hide').removeClass('show');
}, length);

// Mouse move event.
$(window).on('mousemove', function() {

    // Show elements & cursor.
    $('.auto-hide').addClass('show');
    $('body.auto-cursor').addClass('show');

    // Clear timer.
    try { clearTimeout(timer) }
    catch (e) { /* Ignore undefined error. */ }

    // Reinitialize timer.
    timer = setTimeout(function() {
        $('.auto-hide').removeClass('show');
        $('body.auto-cursor').removeClass('show');
    }, length);

});