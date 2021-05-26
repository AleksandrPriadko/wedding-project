import './sass/main.scss';
const axios = require('axios').default;

const form = document.getElementById('form');
const btn = document.querySelector('[data-action="btn"]');
const btnLoader = document.querySelector('[data-action="loader"]');

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  btn.classList.remove('btn');
  btn.classList.add('btn-closed');
  btnLoader.classList.remove('btn-closed');
  btnLoader.classList.add('btn-loader');

  let formData = new FormData(form);
  let response = await fetch('sendmail.php', {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    formPreview.innerHTML = '';
    form.reset();
    btnLoader.classList.remove('btn-loader');
    btnLoader.classList.add('btn-closed');
    btn.classList.remove('btn-closed');
    btn.classList.add('btn');
  } else {
    alert('Ошибка');
    btnLoader.classList.remove('btn-loader');
    btnLoader.classList.add('btn-closed');
    btn.classList.remove('btn-closed');
    btn.classList.add('btn');
  }
}
