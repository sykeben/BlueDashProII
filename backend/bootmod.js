// Autoshowing password box.
$('.autoshow-password').attr('type', 'password');
$('.autoshow-password').on('focusin', function() { $(this).attr('type', 'text'); })
$('.autoshow-password').on('focusout', function() { $(this).attr('type', 'password'); })