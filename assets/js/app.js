$(document).ready(function() {
  $('#discount-tabs').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
    draggable: false,
    centerMode: true,
    asNavFor: '#discount-tab-content',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8,
        }
      }, {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      }

    ]
  });

  $('#discount-tab-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    fade: true,
    arrows: false,
    asNavFor: '#discount-tabs',
  })
})
