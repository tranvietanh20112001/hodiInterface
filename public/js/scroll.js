const fixedDiv = document.querySelector('.row');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    fixedDiv.classList.add('active');
  } else {
    fixedDiv.classList.remove('active');
  }
});