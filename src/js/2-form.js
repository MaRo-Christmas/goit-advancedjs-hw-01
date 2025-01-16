'use strict';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const saveData = localStorage.getItem('feedback-form-state');

if (saveData) {
  const parsedSaveData = JSON.parse(saveData);
  formData.email = parsedSaveData.email || '';
  formData.message = parsedSaveData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function handleFormInput() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function isAllFields(data) {
  return Object.values(data).every(filed => filed !== '');
}

function handleFormSubmit(ev) {
  if (!isAllFields(formData)) {
    alert('Fill please all fields');
    return;
  }
  ev.preventDefault();
  console.log('Form Submitted:', formData);

  localStorage.removeItem('feedback-form-state');

  form.reset();
  formData.email = '';
  formData.message = '';
}
