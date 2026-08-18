const modalButton = document.querySelector("#modalButton");
const modal = document.querySelector(".modal");

modalButton.addEventListener("click", ()=> {
    modal.style.display = window.getComputedStyle(modal).display === "none" ? "flex" :  "none"; 
})