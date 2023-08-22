document.addEventListener('DOMContentLoaded', () => {
  /* Open logic */
  const modalBodies = document.querySelectorAll('[data-modal-body]')
  const modalButtons = document.querySelectorAll('[data-modal-button]')

  /* add hidden class to all modals first */
  const hideAllModalBodies = () => {
    modalBodies.forEach(modal => {
      modal.classList.add('modalWrapper__bodyHidden')
    })
  }

  modalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const thisDataAttribute = e.target.getAttribute('data-modal-button')
      const thisModalBody = document.querySelector(`[data-modal-body=${thisDataAttribute}]`)
      hideAllModalBodies()
      thisModalBody.classList.remove('modalWrapper__bodyHidden')
      modalWrapper.classList.remove('modalWrapperHidden')
    })
  })

  /* Closing logic*/
  const modalWrapper = document.querySelector('.modalWrapper')
  const modalBody = document.querySelector('.modalWrapper__body')
  const modalCloseIcon = document.querySelector('.modalWrapper__body-closeIcon')

  /* Close icon */
  modalCloseIcon.addEventListener('click', () => {
    modalWrapper.classList.add('modalWrapperHidden')
  })

  /* Click on background close */
  modalWrapper.addEventListener('click', e => {
    if (!e.target.closest('.modalWrapper__body')) {
      modalWrapper.classList.add('modalWrapperHidden')
    }
  })

  /* Copy to clipboard */
  const copyBtn = document.querySelector('.affiliateLink__bodyInner-linkBlock-inputWrapper-copyBtn')
  const linkToCopy = document.querySelector('.affiliateLink__bodyInner-linkBlock-inputWrapper-input')

  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(linkToCopy.value)
  })
})