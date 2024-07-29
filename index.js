const arrow = document.querySelector("#arrow");
const dropdown = document.querySelector(".dropdown");
arrow.addEventListener("click", () => {
  if (dropdown.classList.contains("visible")) {
    dropdown.classList.remove("visible");
    arrow.innerHTML = `<i class="fas fa-chevron-down"></i>`;
  } else {
    dropdown.classList.add("visible");
    arrow.innerHTML = `<i class="fas fa-chevron-up"></i>`;
  }
});
