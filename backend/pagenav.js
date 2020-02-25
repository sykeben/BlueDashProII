// Map navbar link click events.
$('a.nav-item.nav-page').each(function() {
    $(this).click(function() {

        // Swap link states.
        $('a.nav-item.nav-page.active').removeClass('active');
        $(this).addClass('active');

        // Swap page states.
        $('div.page.active').hide();
        $('div.page.active').removeClass('active');
        $(`div.page[data-page="${$(this).attr('data-page')}"]`).show();
        $(`div.page[data-page="${$(this).attr('data-page')}"]`).addClass('active');

    });
});

$('div.page:not(.active)').hide();