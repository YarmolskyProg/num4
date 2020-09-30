"use strict";

$('.dev_elem').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  }, {
    breakpoint: 851,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 601,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true      
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.mentors').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});

function myFunction() {
  var x = document.getElementById("myLinks");
  console.log(123);

  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}