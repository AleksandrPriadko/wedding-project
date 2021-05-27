const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('menu[data-action="open-modal"]');
openModalBtn.addEventListener('click', () => {
  document.body.classList.add('show-modal');
});

export { openModalBtn };
