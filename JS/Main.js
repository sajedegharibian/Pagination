"use strict";

const paginationEl = document.querySelector(".pagination");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

const totalPages = 5;
let currentPage = 1;

function renderPagination() {
  paginationEl.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.innerText = i;

    if (i === currentPage) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });

    paginationEl.appendChild(li);
  }

  prevEl.disabled = currentPage === 1;
  nextEl.disabled = currentPage === totalPages;
}

function updatePagination() {
  renderPagination();
}

prevEl.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextEl.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

renderPagination();
