window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
    document.body.style.opacity = null;
  });
  
  document.querySelectorAll('a[href]').forEach(link => {
    const target = link.getAttribute("target");
    const href = link.getAttribute("href");
  
    if (href && !href.startsWith("#") && !href.startsWith("mailto:") && target !== "_blank") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = this.href;
        }, 500);
      });
    }
  });

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
  


  