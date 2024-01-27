document.getElementById('scrollToSectionHomeTest').addEventListener('click', function() {
  const targetSection = document.querySelector('#section_home_test');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});
