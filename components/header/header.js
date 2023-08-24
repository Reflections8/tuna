document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.header__content-burgerIcon')
  const burgerMenu = document.querySelector('.burgerMenu')
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('header__content-burgerIconActive')
    burgerMenu.classList.remove('burgerMenuHidden')
  })

  /* Close logic */
  burgerMenu.addEventListener('click', (e) => {
    if (!e.target.closest('.burgerMenuContent')) {
      burgerMenu.classList.add('burgerMenuHidden')
      burgerIcon.classList.remove('header__content-burgerIconActive')
    }
  })

  /* Header logo link */
  const headerLogo = document.querySelector('.header__content-logo')
  headerLogo.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
})