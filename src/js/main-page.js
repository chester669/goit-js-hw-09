const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = button.getAttribute('data-href');
  });
});
