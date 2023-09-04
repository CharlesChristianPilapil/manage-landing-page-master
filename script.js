const navBar = document.querySelector("#nav-bar");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");

  if (navToggle.classList.contains("active")) {
    navToggle.src = "../images/icon-close.svg";
  } else {
    navToggle.src = "../images/icon-hamburger.svg";
  }

  navBar.classList.toggle("active");
});

document.onclick = function(e) {
  if(e.target !== navBar && e.target !== navToggle) {
    navBar.classList.remove('active');
    navToggle.classList.remove('active')
    navToggle.src = "../images/icon-hamburger.svg";
  }
}

//   if(navToggle.src.match('../images/icon-hamburger.svg')) {
//     navToggle.src='../images/icon-close.svg'
//   }

//   else {
//     navToggle.src='../images/icon-hamburger.svg'
//   }
// });

$(document).ready(function () {
  $("#responsive").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 957,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
