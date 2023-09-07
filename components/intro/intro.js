document.addEventListener('DOMContentLoaded', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax-mouse]');


  const handleParallax = () => {
    parallaxElements.forEach(item => {
      const parallaxSize = Number(item.getAttribute('data-parallax-size'))
      const ratio = 5
      const resultTransform = parallaxSize - ratio

      if (window.innerWidth >= 1200) {
        window.addEventListener('mousemove', function (e) {
          let x = e.clientX / window.innerWidth;
          item.style.transform = 'translateX(-' + x * resultTransform + 'px)';
        });
      } else {
        window.addEventListener('scroll', function (e) {
          const direction = item.getAttribute('data-parallax-direction')
          const scrollY = window.scrollY
          if (direction) {
            if (direction === 'left') {
              item.style.transform = 'translateX(' + scrollY / 1500 * resultTransform + 'px)';
            } else if (direction === 'right') {
              item.style.transform = 'translateX(-' + scrollY / 1500 * resultTransform + 'px)';
            }
          } else {
            item.style.transform = 'translateX(-' + scrollY / 300 * resultTransform + 'px)';
          }


        });
      }
    })

  }

  handleParallax()
  window.addEventListener('resize', handleParallax)

})