// alert("Hello dear My Neha")

// choose location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").innerText =
      "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  document.getElementById("location").innerText = "Fetching address...";

  // Reverse Geocoding to Get Location Name
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      let address = data.display_name;
      document.getElementById(
        "location"
      ).innerHTML = `<strong>Address:</strong> ${address} <br>
                         <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">View on Google Maps</a>`;
    })
    .catch((error) => {
      document.getElementById("location").innerText = "Error fetching address!";
    });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}


// hero section
var swiper = new Swiper(".myHero", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Fresh vegetable
var swiper = new Swiper(".myFreshVegetable", {
  slidesPerView: 6, // Default number of slides
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3, // 1 slide for small screens
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 4, // 2 slides for slightly larger screens
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6, // 3 slides for tablets
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 7, // 4 slides for laptops
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 8, // 6 slides for large screens
      spaceBetween: 10,
    },
  },
});

// Best Seller

var swiper = new Swiper(".myBestSeller", {
  slidesPerView: 5, // Default number of slides
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2, // 1 slide for small screens
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2, // 2 slides for slightly larger screens
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3, // 3 slides for tablets
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4, // 4 slides for laptops
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5, // 6 slides for large screens
      spaceBetween: 10,
    },
  },
});

// BreakFast

var swiper = new Swiper(".myBreakFast", {
  slidesPerView: 4, // Default number of slides
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1, 
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2, 
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3, 
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4, 
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// section
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".myDailyProduct", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
      },
    });

