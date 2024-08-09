// navbar Search_Bar
const navSearch = document.getElementById("nav-search");
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

const clearSearchInput = () => {
  searchInput.value = "";
}

searchIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navSearch.classList.toggle("active")
  searchInput.removeAttribute("disabled");
  clearSearchInput();
});

document.addEventListener("click", (e) => {
  if(!navSearch.contains(e.target)){
    navSearch.classList.remove("active");
    searchInput.setAttribute("disabled", true);
  }
})

//navbar scroll
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
})