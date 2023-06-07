function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header_link") {
      x.className += " responsive";
    } else {
      x.className = "header_link";
    }
  }

// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
    margin:20,
    nav:false,
    dot:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});

const the_animation = document.querySelectorAll('.event-box')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('smooth-appear')
        }
            else {
                entry.target.classList.remove('smooth-appear')
            }
        
    })
},
   { threshold:0
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 
