jQuery(document).ready(function($){
    
 
    if ($(".hideshare")[0]){
        var topOfOthDiv = $(".hideshare").offset().top;
        $(window).scroll(function() {
          if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
              $(".share").hide(); //reached the desired point -- show div
          }
          else{
            $(".share").show();
          }
        });
    }
    
    var offset = 1250; 
    var duration = 800; 
    jQuery(window).scroll(function() { 
        if (jQuery(this).scrollTop() > offset) { 
        jQuery('.back-to-top').fadeIn(duration); 
        } else { 
        jQuery('.back-to-top').fadeOut(duration); 
        }
    });
    jQuery('.back-to-top').click(function(event) { 
    event.preventDefault(); 
    jQuery('html, body').animate({scrollTop: 0}, duration); 
    return false; 
    })


    // alertbar later
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 280) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });

     // masonry
    if ($('.masonrygrid').length){
      var $grid = $('.masonrygrid').masonry({
      itemSelector: '.grid-item'
      });
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
      });
    }

 
        // Smooth scroll to an anchor
        $('a.smoothscroll[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
    
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        var brandrow = $('.brandrow').css("height");
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down            
            $('header').removeClass('nav-down').addClass('nav-up'); 
            $('.nav-up').css('top', - $('header').outerHeight() + 'px');
           
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {               
                $('header').removeClass('nav-up').addClass('nav-down');
                $('.nav-up, .nav-down').css('top', '0px');             
            }
        }

        lastScrollTop = st;
    }
    
    
    $('.site-content').css('margin-top', $('header').outerHeight() + 'px');
    
    
    
    // to top
    $("a.sscroll[href='#totop']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    // just jump
    var jumptopageof = $('#jumptopageof');  
    if (jumptopageof.length) {
        $('body,html').animate({ scrollTop: $(jumptopageof).offset().top  - 0 }, 800);
    }



});

//Button to go to top
var scrolltotop = {
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 1e3,
        fadeduration: [500, 100]
    },
    controlHTML: '<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow89.png" />',
    controlattrs: {
        offsetx: 5,
        offsety: 5
    },
    anchorkeyword: "#top",
    state: {
        isvisible: !1,
        shouldvisible: !1
    },
    scrollup: function() {
        this.cssfixedsupport || this.$control.css({
            opacity: 0
        });
        var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({
            scrollTop: t
        }, this.setting.scrollduration)
    },
    keepfixed: function() {
        var t = jQuery(window),
            o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
            s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({
            left: o + "px",
            top: s + "px"
        })
    },
    togglecontrol: function() {
        var t = jQuery(window).scrollTop();
        this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
            opacity: 1
        }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
            opacity: 0
        }, this.setting.fadeduration[1]), this.state.isvisible = !1)
    },
    init: function() {
        jQuery(document).ready(function(t) {
            var o = scrolltotop,
                s = document.all;
            o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({
                position: o.cssfixedsupport ? "fixed" : "absolute",
                bottom: o.controlattrs.offsety,
                right: o.controlattrs.offsetx,
                opacity: 0,
                cursor: "pointer"
            }).attr({
                title: "Scroll to Top"
            }).click(function() {
                return o.scrollup(), !1
            }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({
                width: o.$control.width()
            }), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function() {
                return o.scrollup(), !1
            }), t(window).bind("scroll resize", function(t) {
                o.togglecontrol()
            })
        })
    }
};
scrolltotop.init();
