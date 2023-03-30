const images = [
    "../img/intropage1.jpg",
    "../img/intropage2.jpg"
];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const backgroundElement = document.querySelector('.background-image');
    backgroundElement.style.backgroundImage = `url(${selectedImage})`;
  }