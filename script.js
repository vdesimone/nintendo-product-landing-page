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

//scrollRevealAnimation
ScrollReveal().reveal(".content h1", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
  interval: 200,
  reset: true,
  opacity: 1,
});

ScrollReveal().reveal(".img", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
  interval: 200,
  reset: true,
  opacity: 1,
});

ScrollReveal().reveal(".systems_product", {
  duration: 1000,
  origin: "bottom",
  distance: "20px",
  interval: 200,
  reset: true,
  opacity: 1,
});

ScrollReveal().reveal(".g_box", {
  duration: 1000,
  origin: "bottom",
  distance: "20px",
  interval: 200,
  reset: true,
  opacity: 1,
});

ScrollReveal().reveal(".box", {
  duration: 1000,
  origin: "bottom",
  distance: "20px",
  interval: 200,
  opacity: 1,
});

ScrollReveal().reveal(".col", {
  duration: 1000,
  origin: "bottom",
  distance: "20px",
  interval: 200,
  opacity: 1,
});

// Switch video
const videos = {
  video1: "https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_480/ncom/en_US/switch/refresh/games/videos/mk8d.webm",
  video2: "https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_480/ncom/en_US/switch/refresh/games/videos/smbw_1.webm",
  video3: "https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_480/ncom/en_US/switch/refresh/games/videos/ssbu.webm",
  video4: "https://assets.nintendo.com/video/upload/q_auto/f_auto/c_scale,w_480/ncom/en_US/switch/refresh/games/videos/smp.webm",
};

let currentVideoIndex = -1;

function fadeVideo(videoElement) {
  videoElement.style.opacity = 0;
  videoElement.style.display = "block";

  let fadeInInterval = setInterval(() => {
    if (videoElement.style.opacity < 1) {
      videoElement.style.opacity = parseFloat(videoElement.style.opacity) + 0.05;
    } else {
      clearInterval(fadeInInterval);
      videoElement.play();
    }
  }, 50);

  videoElement.onended = () => {
    let fadeOutInterval = setInterval(() => {
      if (videoElement.style.opacity > 0) {
        videoElement.style.opacity = parseFloat(videoElement.style.opacity) - 0.05;
      } else {
        clearInterval(fadeOutInterval);
        videoElement.style.display = "none";
        switchVideo(videoElement);
      }
    }, 50);
  };
}

function switchVideo(videoElement) {
  currentVideoIndex = (currentVideoIndex + 1) % Object.keys(videos).length;
  videoElement.src = videos[Object.keys(videos)[currentVideoIndex]];
  fadeVideo(videoElement);
}

const videoElement = document.getElementById("video");
switchVideo(videoElement);