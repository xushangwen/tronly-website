$(document).ready(function() {
    $('#scrollToSectionHomeTest').click(function() {
        $('html, body').animate({
            scrollTop: $('#section_home_test').offset().top
        }, 1000);
    });
});
