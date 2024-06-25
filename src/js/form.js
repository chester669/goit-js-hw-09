const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
