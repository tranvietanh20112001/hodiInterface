   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the image and insert it inside the modal - use its "alt" text as a caption
   var modalImg = document.getElementById("modal-image");
   
   function openModal(img) {
     modal.style.display = "block";
     modalImg.src = img.src;
   }
   
   // When the user clicks on <span> (x), close the modal
   function closeModal() {
     modal.style.display = "none";
   }
   
   /*Sẽ đóng modal khi nhấp ra ngoài màn hình*/
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }