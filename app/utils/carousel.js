export function initHomeCarousels(){
  if (typeof window === "undefined") return;

    if ($(".header-carousel").length){
         $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });  
    }

    if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
      },
    });
  }
};

export function destroyHomeCarousels(){
    if ($(".header-carousel").length){
        $(".header-carousel").trigger('destroy.owl.carousel');
    }

    if ($(".testimonial-carousel").length) {
        $(".testimonial-carousel").trigger('destroy.owl.carousel');
    }
}