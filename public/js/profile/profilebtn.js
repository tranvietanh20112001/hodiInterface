const colorBtns = document.querySelectorAll('.color-btn');

colorBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    colorBtns.forEach((btn) => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
  });
  
  if (index === 0) {
    btn.classList.add('active');
  }
});