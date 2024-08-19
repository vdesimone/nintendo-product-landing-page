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

// navbar scroll
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
})

// Scroll to Top
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

// sidebar
let burger = document.querySelector(".burger");
let navbarItems = document.querySelector(".navbar-items");
let nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  navbarItems.classList.toggle("v-class");
  nav.classList.toggle("h-class");
})

// scrollRevealAnimation
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
  reset: false,
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

// Cycle through accessories
const travelCases = {
  case1: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Cases/nintendo-switch-travel-case-glow-super-star-120767/120767-pdp-nintendo-switch-travel-case-super-mario-star-front-1200x675",
    description: "Nintendo Switch™ Travel Case Glow - Super Star",
  },
  case2: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/products/accessories/nintendo-switch/system-cases-and-bags/protection-case-animal-crossing-117923/117923-powera-protection-case-animal-crossing-front-1200x675",
    description: "Protection Case - Animal Crossing™",
  },
  case3: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/products/accessories/nintendo-switch/system-cases-and-bags/protection-case-kirby-117924/117924-powera-protection-case-kirby-front-1200x675",
    description: "Protection Case - Kirby™",
  },
};

const wiredControllers = {
  controller1: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Controllers/rematch-wired-controller-mario-escape-120768/120768-pdp-nintendo-switch-rematch-wired-controller-mario-escape-front-1200x675",
    description: "REMATCH Wired Controller: Mario™ Escape",
  },
  controller2: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/faceoff-deluxe-audio-wired-controller-animal-crossing-tom-nook-117865/117865-pdp-faceoff-deluxe-plus-audio-wired-controller-animal-crossing-tom-nook-front-1200x675",
    description: "Faceoff™ Deluxe+ Audio Wired Controller: Animal Crossing™: Tom Nook",
  },
  controller3: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/enhanced-wired-controller-kirby-117921/117921-powera-enhanced-wireless-controller-kirby-front-1200x675",
    description: "Enhanced Wired Controller - Kirby™",
  },
};

const joyCons = {
  joyCon1: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/en_US/products/accessories/nintendo-switch/controllers/joy-con-controllers/joy-con-neon-red-neon-blue/104882-nintendo-switch-joy-con-red-blue-package-1200x675",
    description: "Joy-Con™ (L)/(R) Neon Red/Neon Blue",
  },
  joyCon2: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Controllers/joy-con-l-r-pastel-purple-pastel-green-117078/117078-nintendo-switch-joy-con-set-pastel-purple-l-pastel-green-r-box-1200x675",
    description: "Joy-Con™ (L)/(R) Pastel Purple / Pastel Green",
  },
  joyCon3: {
    src: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Controllers/joy-con-l-r-pastel-pink-120776/120776-nintendo-joy-con-set-pastel-pink-package-1200x675",
    description: "Joy-Con™ (L)/(R) Pastel Pink",
  },
};

const travelCaseImage = document.getElementById("travel-case-img");
const controllerImage = document.getElementById("controller-img");
const joyConImage = document.getElementById("joy-con-img");

const travelCaseDescription = document.getElementById("travel-case-desc");
const controllerDescription = document.getElementById("controller-desc");
const joyConDescription = document.getElementById("joy-con-desc");

function changeAccessory() {
  const travelCaseKeys = Object.keys(travelCases);
  const controllerKeys = Object.keys(wiredControllers);
  const joyConKeys = Object.keys(joyCons);
  let index = 0;

  setInterval(() => {
    const currentTravelCase = travelCases[travelCaseKeys[index]];
    travelCaseImage.src = currentTravelCase.src;
    travelCaseDescription.textContent = currentTravelCase.description;

    const currentController = wiredControllers[controllerKeys[index]];
    controllerImage.src = currentController.src;
    controllerDescription.textContent = currentController.description;

    const currentJoyCon = joyCons[joyConKeys[index]];
    joyConImage.src = currentJoyCon.src;
    joyConDescription.textContent = currentJoyCon.description;

    // Fade in effect
    travelCaseImage.style.opacity = 1;
    controllerImage.style.opacity = 1;
    joyConImage.style.opacity = 1;

    setTimeout(() => {
      travelCaseImage.style.transition = "opacity 1s";
      travelCaseImage.style.opacity = 1;
      controllerImage.style.transition = "opacity 1s";
      controllerImage.style.opacity = 1;
      joyConImage.style.transition = "opacity 1s";
      joyConImage.style.opacity = 1
    }, 1000);

    // Fade out effect
    setTimeout(() => {
      travelCaseImage.style.opacity = 0;
      controllerImage.style.opacity = 0;
      joyConImage.style.opacity = 0;
    }, 7000);

    index = (index + 1) % travelCaseKeys.length;
  }, 8000);
}

changeAccessory();