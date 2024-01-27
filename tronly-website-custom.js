document.getElementById('scrollToSectionHomeTest').addEventListener('click', function() {
    var targetSection = document.getElementById('section_home_test');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
