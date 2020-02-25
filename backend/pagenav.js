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

// Hide inactive pages.
$('div.page:not(.active)').hide();

// Use hash if needed.
let hash = window.location.hash.substr(1);
if (hash.length > 0) {
    $(`a.nav-item.nav-page[data-page="${hash}"]`).click();
}