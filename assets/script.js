  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementById("close-btn");
    const images = document.querySelectorAll(".expandable-image");
  
    images.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
      });
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });


window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});
  


  
