import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  const formData = new FormData(form);
  const formDataJSON = JSON.stringify(Object.fromEntries(formData));
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
    try {
      const savedMessageParsed = JSON.parse(savedMessage);
      Object.keys(savedMessageParsed).forEach(
        key => (form[key].value = savedMessageParsed[key])
      );
    } catch (error) {
      console.log(error.email); // "SyntaxError"
      console.log(error.message); // "Unexpected token u in JSON at position 1"
    }
  }
}
