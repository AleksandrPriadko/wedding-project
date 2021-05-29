const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
document.querySelectorAll('.js-click').forEach(closeLink => {
  closeLink.addEventListener('click', () => {
    document.body.classList.remove('show-modal');
  });
});
openModalBtn.addEventListener('click', () => {
  document.body.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
});

export { openModalBtn };
