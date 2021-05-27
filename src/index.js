import './sass/main.scss';
const axios = require('axios').default;

const form = document.getElementById('form');
const btn = document.querySelector('[data-action="btn"]');
const btnLoader = document.querySelector('[data-action="loader"]');
const userName = document.querySelector('.user-name');
console.log(userName);
const messages = document.querySelector('messages');

form.addEventListener('submit', formSend);

function formSend(e) {
  e.preventDefault();

  btn.classList.remove('btn');
  btn.classList.add('btn-closed');
  btnLoader.classList.remove('btn-closed');
  btnLoader.classList.add('btn-loader');

  const formsData = e.target;
  const formData = new FormData(formsData);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });
  console.log(submittedData);
  const nameKey = submittedData.Name;
  const messageValue = submittedData.Message;
  const presenceValue = submittedData.Presence;

  axios
    .post('https://formfor.site/send/WXHrRdmCTkBpWWEdxi9IDCc7p0X0O6', {
      Name: nameKey,
      Message: messageValue,
      Presence: presenceValue,
    })
    .then(request => {
      console.log(request);
      if (request.status === 200) {
        form.reset();
        btnLoader.classList.remove('btn-loader');
        btnLoader.classList.add('btn-closed');
        btn.classList.remove('btn-closed');
        btn.classList.add('btn');
        alert('Письмо отправлено');
      } else {
        alert('Ошибка');
        btnLoader.classList.remove('btn-loader');
        btnLoader.classList.add('btn-closed');
        btn.classList.remove('btn-closed');
        btn.classList.add('btn');
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
