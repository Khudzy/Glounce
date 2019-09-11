$(document).ready(function(){

    /*Preloader*/
    (function($){
        jQuery(window).load(function() {
    	    $('#preloader').hide();
        });
    })(jQuery);

    /* Parallax */
    (function($){
        $('.design-cover').parallax("50%", 0.4);
        $('.working-prosess').parallax("40%", 0.4);
        $('.fun-facts-section').parallax("50%", 0.1);
    })(jQuery);

    /*Owl carosuel */
    (function($){
        var owl = $("#client-carousel");
        owl.owlCarousel({
            items : 2, //10 items above 1000px browser width
            itemsDesktop : [1000,2], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,2], // betweem 900px and 601px
            itemsTablet: [600,1], //2 items between 600 and 0
            itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        })
        // Custom Navigation Events
        $(".next").click(function(){
            owl.trigger('owl.next');
        });
        $(".prev").click(function(){
            owl.trigger('owl.prev');
        });
    })(jQuery);

    /*Menu script */
    (function($){
        $(".show-btn").click(function(){
            $(".nav").slideToggle(500);
        });
    })(jQuery);

    /* Placeholder script */
    (function($){
        Placeholdem( document.querySelectorAll( '[placeholder]' ) );
        var fadeElems = document.body.querySelectorAll( '.fade' ),
        fadeElemsLength = fadeElems.length,
        i = 0,
        interval = 50;
        function incFade() {
        	if( i < fadeElemsLength ) {
        		fadeElems[ i ].className += ' fade-load';
        		i++;
        		setTimeout( incFade, interval );
        	}
        }
        setTimeout( incFade, interval );
    })(jQuery);

    /*Skill progressbar */
    (function($){
        $('.progressbar').each(function(){
    		var t = $(this);
    		var dataperc = t.attr('data-perc'),
    				barperc = Math.round(dataperc*5);
    		t.find('.bar').animate({width:barperc}, dataperc*25);
    		t.find('.label').append('<div class="perc"></div>');

    		function perc() {
    			var length = t.find('.bar').css('width'),
    				perc = Math.round(parseInt(length)/5.56),
    				labelpos = (parseInt(length)-1);
    			t.find('.label').css('left', labelpos);
    			t.find('.perc').text(perc+'%');
    		}
    		perc();
    		setInterval(perc, 0);
        });
    })(jQuery);

    /* PrettyPhoto activation  */
    (function($){
        $("area[data-gal^='prettyPhoto']").prettyPhoto();
        $(".gallery:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
        $(".gallery:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
    })(jQuery);

    /*Wow animation */
    (function($){
        wow = new WOW({
            animateClass: 'animated',
            offset:       100,
            callback:     function(box){}
        });
        wow.init();
    })(jQuery);

    /*Counter js */
    (function($) {
        "use strict";
        function count($this){
            var current = parseInt($this.html(), 10);
            current = current + 1; /* Where 50 is increment */
            $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } else {
            setTimeout(function(){count($this)}, 50);
            }
        }
        $(".stat-count").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    })(jQuery);

    /*Header Mneu */
    (function($){
        $(document).on("scroll", onScroll);
        //smoothscroll
        $('a[href^="#"]').on('click', function(even) {
            even.preventDefault();
            $(document).off("scroll");
            $('li').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('#bs-example-navbar-collapse-1 a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('#bs-example-navbar-collapse-1 ul li').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }
    })(jQuery);

    /*Isotope  */
    (function($){
        // init Isotope
        var $container = $('.portfolio-item').isotope({
            itemSelector: '.single-portfolio',
            layoutMode: 'fitRows',
            getSortData: {
                name: '.name',
                symbol: '.symbol',
                number: '.number parseInt',
                category: '[data-category]',
                weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
              }
            }
        });

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
            }
        };

          // bind filter button click
          $('.filter_menu').on( 'click', 'li', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $container.isotope({ filter: filterValue });
          });

          // change is-checked class on buttons
          $('.filter_menu').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
              $buttonGroup.find('.active').removeClass('active');
              $( this ).addClass('active');
            });
        });
   })(jQuery);

   /* Nicescroll */
   (function($){
        $("html").niceScroll({
            cursorborder:"",
            cursorcolor:"#00F",
            boxzoom:false,
            scrollspeed:60,
            cursorcolor: "#fff",
            cursorwidth: "5px",
            zindex: "9999999",
            mousescrollstep:40,   
            enablemousewheel: true,
        });
   })(jQuery);




});








