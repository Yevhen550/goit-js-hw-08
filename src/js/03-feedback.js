import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');

let storageData;
try {
  storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
} catch (error) {
  console.log(`Local storage: ${error.name}`);
  console.log(`Local storage: ${error.message}`);
}
if (storageData !== null) {
  const { email, message } = storageData;
  if (email !== undefined) {
    inputEmail.value = email;
  }
  if (message !== undefined) {
    inputMessage.value = message;
  }
} else {
  storageData = {};
}

form.addEventListener(
  'input',
  throttle(event => {
    if (event.target.name === 'email') {
      storageData.email = event.target.value;
    } else if (event.target.name === 'message') {
      storageData.message = event.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(storageData));
  }, 500)
);

form.addEventListener('submit', event => {
  if (inputEmail.value !== '' && inputMessage.value !== '') {
    event.preventDefault();
    console.log(storageData);
    storageData = {};
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Fill up all fields!');
  }
});
