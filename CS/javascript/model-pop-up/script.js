document.addEventListener("DOMContentLoaded",() => {
     const modal = document.getElementById("myModal");
     const openModal = document.getElementById("openModal");
     const closeModal = document.getElementById("closeModal");
     openModal.addEventListener("click", () => {
          modal.style.display = "block";
     });
     closeModal.addEventListener("click" , () => {
          modal.style.display = "none";
     });
     window.addEventListener("click", (event) => {
          if (event.target == modal) {
               modal.style.display ="none";
          }
     });
});
