$(document).ready(function() {
    $('#scrollToSectionHomeTest').click(function() {
        $('html, body').animate({
            scrollTop: $('#section_home_test').offset().top
        }, 6000); // 设置动画持续时间为 1000 毫秒（1秒）
    });
});
