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
})