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

//Scroll to Top
document.querySelector("#to-top").addEventListener("click", () => {
  let topInterval = setInterval(() => {
    let arrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

    if(arrowTop.scrollTop > 0) {
      arrowTop.scrollTop = arrowTop.scrollTop - 50;
    }
    if(arrowTop.scrollTop < 1) {
      clearInterval(topInterval);
    }
  }, 10)
}, false);

function showScroll() {
  let topButton = document.getElementById("to-top");
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.classList.add("show")
  } else {
    topButton.classList.remove("show")
  }
}

window.onscroll = () => {
  showScroll();
}