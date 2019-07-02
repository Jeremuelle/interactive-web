/**
 * MAIN JS 
 * 
 *  @site       Sample interactive site
 *  @author     Jem Lopez
 *  @email      jeremuelle1@gmail.com
 *  @date       10 Oct 2017
 *
 * How to compile: run this command on terminal - npm run dev 
 */
// import particlesJson from './particlesJson.js';

$(function() { 
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    var partJson = "data:text/plain;base64," + window.btoa(JSON.stringify(particlesJson));    
    // console.log(window.btoa(JSON.stringify(particlesJson)))
    particlesJS.load('particles-js', partJson, function() {
      console.log('callback - particles.js config loaded');
    });

    // Initiate animation on scroll
    AOS.init();

    $(document).ready(function(){
        // Side nav fixed not on mobile
        if ($(window).width() >= 768) {
            $('.sticker').stick_in_parent();
            $('#sidebar-nav').stick_in_parent()
        }

        // Scroll to year number
        $('#sidebar-nav li > a').each(function(index) {
            var year_number = index + 1;
            var year = $('.year:nth-child(' + year_number + ')');
            var self = $(this);
            // On click
            self.on('click', function() {
                $('body, html').animate({
                    scrollTop : year.offset().top - 10
                }, 600);
            });
            // Change on scroll
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if (scroll >= year.offset().top) {
                    self.addClass('scroll-is-active');
                } else {
                    self.removeClass('scroll-is-active');
                }
            });
        });
        //trigger the scroll
        $(window).scroll();
      
        // Background year
        $('.bg-year').each(function() {
            $(this).attr('data-aos', 'fade-right')
                    .attr('data-aos-delay', 500)
                    .attr('data-aos-duration', 1200);
        });

        // Side nav Links
        $('.sticker').each(function(index) {
            $(this).attr('data-aos', 'fade-down')
                .attr('data-aos-once', true)
                .attr('data-aos-delay', 900)
                .attr('data-aos-duration', 1200);
        });

        // Year' list side bar animation on scroll
        $('.sticker ul > li ').each(function(index) {
            var n = index  * 100; 
            $(this).attr('data-aos', 'slide-right')
                    .attr('data-aos-delay',n);
        });

        // Bubbles animation on scroll
        $('.bubble > figure').each(function(index) {
            $(this).attr('data-aos', 'bounce');
        });

        // move to next month
        $('.month > aside ').each(function(index) {
            var n = index + 1;
            var self = $(this);
            var circle = self.find('.circle');
            circle.on('click', function() {
                 $('body, html').animate({
                    scrollTop : $('.circle').eq(n).offset().top - 10
                }, 300);
            });
        });

        // Line for months
        $('.month > .vr').each(function(index) {
            $(this).attr('data-aos', 'grow');
            var n = index * 1000; 
            $(this).attr('data-aos-delay', n );
            
        });
        // Random Position for the bubles: NOT ON MOBILE
        if ($(window).width() >= 768) {
            $('ul.bubbles li').each(function() {
                var random = Math.floor((Math.random() * 200) + 1);
                $(this).css({'left': random});
            });
        }

        // Add active class for bubbles
        $('#side-nav li:not(:last-child) > a').bind('click', function() {
            var self = $(this);
            var parent_id = self.data('parent');
            self.addClass('is-active');
            // Don't append if exists
            if(self.find('button.close').length == 0) {
                self.append('<button class="close"></button>');
            }
            // Loop through bubbles
            $('.bubbles > li').each(function() {
                var belongs_to = $(this).data('belong-to-parent');
                if( parent_id == belongs_to) {
                    $(this).find('.circle-object').addClass('bubble-active');
                } else {
                    $(this).addClass('not-active');
                }
                
            });
        });

        // Remove active bubble
        $(document).on('click', 'button.close' ,function(e) {
            var parent_id = $(this).closest('.is-active');
            $('.bubbles > li').each(function() {
                var belongs_to = $(this).data('belong-to-parent');
                if( parent_id.data('parent') == belongs_to) {
                    $(this).find('.circle-object').removeClass('bubble-active');
                } else {
                    $(this).removeClass('not-active');
                }
            });
            parent_id.removeClass('is-active');
            $(this).remove();
        });
    });
});



var particlesJson =
{
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 1736.124811591
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 30,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 2
            },
            "repulse": {
                "distance": 70,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}