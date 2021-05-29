import './sass/main.scss';
import './js/modal';
const axios = require('axios').default;

const Ref = {
  form: document.getElementById('form'),
  btn: document.querySelector('[data-action="btn"]'),
  btnLoader: document.querySelector('[data-action="loader"]'),
};
// Прокрутка при нажатии по навигации сайта
Ref.form.addEventListener('submit', formSend);
document.querySelectorAll('#click').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offSetPosition = elementPosition - 0;
    window.scrollBy({
      top: offSetPosition,
      behavior: 'smooth',
    });
  });
});

function formSend(e) {
  e.preventDefault();

  Ref.btn.classList.remove('btn');
  Ref.btn.classList.add('btn-closed');
  Ref.btnLoader.classList.remove('btn-closed');
  Ref.btnLoader.classList.add('btn-loader');

  const formsData = e.target;
  const formData = new FormData(formsData);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });
  console.log(submittedData);
  const nameKey = submittedData.Name;
  const messageValue = submittedData.Comment;
  const presenceValue = submittedData.Presence;

  axios
    .post('https://formfor.site/send/nvxuhsHU9UDZTm6wHGPdkGwQGBrb1t', {
      Name: nameKey,
      Comment: messageValue,
      Presence: presenceValue,
    })
    .then(request => {
      console.log(request);
      if (request.status === 200) {
        form.reset();
        Ref.btnLoader.classList.remove('btn-loader');
        Ref.btnLoader.classList.add('btn-closed');
        Ref.btn.classList.remove('btn-closed');
        Ref.btn.classList.add('btn');
        alert('Письмо отправлено');
      } else {
        alert('Ошибка');
        Ref.btnLoader.classList.remove('btn-loader');
        Ref.btnLoader.classList.add('btn-closed');
        Ref.btn.classList.remove('btn-closed');
        Ref.btn.classList.add('btn');
      }
    })
    .catch(error => {
      console.log(error);
    });
}

// async function formSend(e) {
//   e.preventDefault();

//   btn.classList.remove('btn');
//   btn.classList.add('btn-closed');
//   btnLoader.classList.remove('btn-closed');
//   btnLoader.classList.add('btn-loader');

//   let formData = new FormData(form);
//   let response = await fetch('sendmail.php', {
//     method: 'POST',
//     body: formData,
//   });
//   if (response.ok) {
//     let result = await response.json();
//     alert(result.message);
//     formPreview.innerHTML = '';
//     form.reset();
//     btnLoader.classList.remove('btn-loader');
//     btnLoader.classList.add('btn-closed');
//     btn.classList.remove('btn-closed');
//     btn.classList.add('btn');
//   } else {
//     alert('Ошибка');
//     btnLoader.classList.remove('btn-loader');
//     btnLoader.classList.add('btn-closed');
//     btn.classList.remove('btn-closed');
//     btn.classList.add('btn');
//   }
// }
