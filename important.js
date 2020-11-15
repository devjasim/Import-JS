(function($) {
    "use strict";
    // // onClick new options list of new select
    // $('.ae-select-content').text($('.dropdown-menus > li.selected').text());
    // var newOptions = $('.dropdown-menus > li');
    // newOptions.click(function () {
    //     $('.ae-select-content').text($(this).text());
    //     $('.dropdown-menus > li').removeClass('selected');
    //     $(this).addClass('selected');
    // });

    // var aeDropdown = $('.ae-dropdown');
    // aeDropdown.click(function () {
    //     $('.dropdown-menus').toggleClass('ae-hide');
    // });

    //test for getting url value from attr
    // var img1 = $('.test').attr("data-thumbnail");
    // console.log(img1);

    //test for iterating over child elements
    var langArray = [];
    $(".vodiapicker option").each(function() {
        var img = $(this).attr("data-thumbnail");
        var text = this.innerText;
        var value = $(this).val();
        var item =
            '<li><img src="' +
            img +
            '" alt="" value="' +
            value +
            '"/><span>' +
            text +
            "</span></li>";
        langArray.push(item);
    });

    $("#lang-drop").html(langArray);

    //Set the button value to the first el of the array
    $(".btn-select").html(langArray[0]);
    $(".btn-select").attr("value", "en");

    //change button stuff on click
    $("#lang-drop li").click(function() {
        var img = $(this).find("img").attr("src");
        var value = $(this).find("img").attr("value");
        var text = this.innerText;
        var item =
            '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
        $(".btn-select").html(item);
        $(".btn-select").attr("value", value);
        $(".language").toggle();
        //console.log(value);

        $(item).toggleClass("white");
    });

    $(".btn-select").click(function() {
        $(".language").toggle();
    });

    //check local storage for the lang
    var sessionLang = localStorage.getItem("lang");
    if (sessionLang) {
        //find an item with value of sessionLang
        var langIndex = langArray.indexOf(sessionLang);
        $(".btn-select").html(langArray[langIndex]);
        $(".btn-select").attr("value", sessionLang);
    } else {
        var langIndex = langArray.indexOf("ch");
        $(".btn-select").html(langArray[langIndex]);
        //$('.btn-select').attr('value', 'en');
    }

    $("#carousel_banner").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 10,
    });

    $("#deskpckg_carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 10,
    });

    $("#white_carousel_one").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 10,
    });

//     $(document).ready(function() {
//         var carousel_loop = $(".carousel_loop");

//         carousel_loop.on("mousewheel", ".owl-stage", function(e) {
//             if (e.originalEvent.wheelDelta > 0) {
//                 owl.trigger("next.owl");
//             } else {
//                 owl.trigger("prev.owl");
//             }
//             e.preventDefault();
//         });
//     });

    $("#carousel_acrt").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 10,
    });

    $("#carousel_update").owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 25,
        navText: [
            "<i class='bg__img car__slide_left'></i>",
            "<i class='bg__img car__slide_right'></i>",
        ],
    });

    $("#carousel_footer").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 10,
        navText: [
            "<i class='bg__img car__slide_left'></i>",
            "<i class='bg__img car__slide_right'></i>",
        ],
    });

    // for humberger menu
    var navSlide = function() {
        var burger = document.querySelector(".btn-menu");
        var nav = document.querySelector(".main-menu");
        var navLinks = document.querySelectorAll(".nav li");

        // for top add class
        var pageW = document.querySelector(".page-wrapper");

        //toggle nav
        burger.addEventListener("click", function() {
            nav.classList.toggle("nav-active");

            // burger animation
            burger.classList.toggle("toggle");

            pageW.classList.toggle("burger");
        });
    };

    navSlide();
    // for humberger menu

    $(document).ready(function() {
        var docEl = $(document),
            pageWrapper = $(".page-wrapper"),
            headerWrapEl = $(".section-nav");
        // linkScroll = $('.scroll');

        docEl.on("scroll", function() {
            if (docEl.scrollTop() > 20) {
                pageWrapper.addClass("nav-style");
                headerWrapEl.addClass("fixed-to-top");
                // navEl.addClass('fixed-to-top');
            } else {
                pageWrapper.removeClass("nav-style");
                headerWrapEl.removeClass("fixed-to-top");
                // navEl.removeClass('fixed-to-top');
            }
        });

        // linkScroll.click(function(e){
        //     e.preventDefault();
        //     $('body, html').animate({
        //        scrollTop: $(this.hash).offset().top
        //     }, 500);
        //  });
    });

    $(function() {
        $(".mobile-box").on("click", function(event) {
            event.preventDefault();
            $(this).toggleClass("selected");
            $(this).parent().find(".pricing-box").first().slideToggle(600);

            $(this).parent().siblings().find(".pricing-box").hide(500);

            //Hide menu when clicked outside
            $(this)
                .parent()
                .find(".pricing-box")
                .parent()
                .mouseleave(function() {
                    var thisUI = $(this);
                    $("html").click(function() {
                        thisUI.children(".pricing-box").hide();
                        thisUI.children(".mobile-box").removeClass("selected");

                        $("html").unbind("click");
                    });
                });
        });
    });

    // faq owlCarousel
    $("#faq_carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        nav: true,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 10,
    });
    // faq owlCarousel

    var expandArray = document.querySelectorAll(".btn-link");
    var buttonArray = document.querySelectorAll(".icon-rotate");

    if (typeof Array.prototype.forEach != "function") {
        document.querySelectorAll(".icon-rotate").Array.prototype.forEach(function(i) {
            i.addEventListener("click", function(e) {
                const clickedBtnIndex = [buttonArray].indexOf(e.target);
                expandArray[clickedBtnIndex].classList.toggle("rotate");
            });
        });
    }

    // for blog discover more
    $(function() {
        $(".blog-card").slice(0, 4).show();
        $("body").on("click touchstart", ".btn_discover", function(e) {
            e.preventDefault();
            $(".blog-card:hidden").slice(0, 2).slideDown();
            if ($(".blog-card:hidden").length == 0) {
                $(".btn_discover").css("visibility", "hidden");
            }
            $("html,body").animate({
                    scrollTop: $(this).offset().top,
                },
                1000
            );
        });
    });
    // for blog discover more

    // for horizontal scroll bar
    if ($(".scrolls")[0]) {
        const slider = document.querySelector(".scrolls");
        let isDown = false;
        let startX;
        let scrollLeft;
        let scroll;

        slider.addEventListener("mousedown", function(e) {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            scroll = slider.scroll;
        });
        slider.addEventListener("mouseleave", function() {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mouseup", function() {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mousemove", function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;

            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener("mousewheel", function(e) {
            if (e.originalEvent.wheelDelta / 120 > 0) {
                // scroll up event
                scroll($(this), "prev");
            } else {
                // scroll down event
                scroll($(this));
            }
        });
    }
    $(".scroll-bar-full").on("wheel", function(e) {
        var maxScrollLeft = $(this)[0].scrollWidth - $(this)[0].clientWidth;
        var delta = e.originalEvent.deltaY;
        if (delta > 0) {
            var ScrollLeft = $(this).scrollLeft() + 5;
            if (maxScrollLeft > ScrollLeft) {
                e.preventDefault();
                $(this).scrollLeft(ScrollLeft + delta);
            }
        } else {
            var ScrollLeft = $(this).scrollLeft() - 5;
            if (ScrollLeft > 0) {
                e.preventDefault();
                $(this).scrollLeft(ScrollLeft + delta);
            }
        }
    });
    // for horizontal scroll bar


    // 	Carousel click to scroll bottom
    $(document).ready(function() {
        $(".section-accurate-keyword .owl-nav").click(function() {
            console.log("Clicekd over");
            $("html, body").animate({
                    scrollTop: $(".scroll__too").offset().top,
                },
                1000
            );
        });
    });
    $(window).load(function() {
        setTimeout(function() {
            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "/wp-content/themes/SEOSoftware/assets/fontawesome/css/all.min.css"
            });
            css_link.appendTo('head');
        }, 2000);
    });


    $('.carousel_loop').on('mousewheel', function(e, delta) {
		 var carousel_loop = $(".carousel_loop");
		var delta = e.originalEvent.deltaY;
        if (delta > 0) {
			if(!($(this).find(" .owl-dot:last-child").hasClass("active"))){
				 e.preventDefault();
			  carousel_loop.trigger("next.owl");
			   }
		}else{
			if(!($(this).find(".owl-dot:first-child").hasClass("active"))){
				 e.preventDefault();
			   carousel_loop.trigger("prev.owl");

			   }
		}
		
    });
	
	
	// 	for tab content 

	// 	for tabbing 

	(($.fn.tabbing = function (e) {
  var a = {
    delayTime: 300,
  };

  return (
    (e = e || {}),
    (a = $.extend(a, e)),
    this.each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();

        var t = 0;

        $(this)
          .prevAll()
          .each(function () {
            t += $(this).width();
          });

        document.getElementById("myTab").scrollWidth;

        var l = t - ($(this).parent().width() - $(this).width()) / 2;

        l < 0 && (l = 0),
          $(this).parent().animate(
            {
              scrollLeft: l,
            },
            a.delayTime
          );
      });
    })
  );
}),
$(".nav-tabs li").tabbing(),
$(window).resize(function () {
  var e = $(".tab-panel-full").width(),
    a = document.getElementById("myTab").scrollWidth;

  parseInt(e) > parseInt(a)
    ? $("#myTab").css({
        "justify-content": "center",
      })
    : $("#myTab").css({
        "justify-content": "left",
      });
}),

$(document).ready(function () {
  var e = $(".tab-panel-full").width(),
    a = document.getElementById("myTab").scrollWidth;

  parseInt(e) > parseInt(a)
    ? $("#myTab").css({
        "justify-content": "center",
      })
    : $("#myTab").css({
        "justify-content": "left",
      });
}))


})(jQuery);
