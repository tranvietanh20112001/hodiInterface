const colorChangingDiv = document.querySelector('#header');
const body = document.body;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    colorChangingDiv.style.backgroundColor = '#f00'; /* Change the background color when the user scrolls past 200 pixels */
  } else {
    colorChangingDiv.style.backgroundColor = '#fff'; /* Reset the background color when the user scrolls back up */
  }
});


