const modalButton = document.querySelector("#productModalButton");
const modal = document.querySelector("#productModal");

modalButton.addEventListener("click", ()=> {
    modal.style.display = window.getComputedStyle(modal).display === "none" ? "flex" :  "none"; 
})

const categoryModalButton = document.querySelector("#categoryModalButton");
const categoryModal = document.querySelector("#categoryModal");

categoryModalButton.addEventListener("click", ()=> {
    categoryModal.style.display = window.getComputedStyle(categoryModal).display === "none" ? "flex" :  "none"; 
})