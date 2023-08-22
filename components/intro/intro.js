document.addEventListener('DOMContentLoaded', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax-mouse]');
  parallaxElements.forEach(item => {
    const parallaxSize = Number(item.getAttribute('data-parallax-size'))
    const ratio = 5
    const resultTransform = parallaxSize - ratio
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      item.style.transform = 'translateX(-' + x * resultTransform + 'px)';
    });
  })

})