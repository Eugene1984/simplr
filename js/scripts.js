// JavaScript Document



/* ==============================================
// Header fixed
=============================================== */	
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.section-light').offset().top; // pixels to the top of div1
        var ht = $('.section-light').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
        $('.navigation').addClass('affix');
        }
		 else {
        $(".navigation").removeClass("affix");
    	}
    });
});

/* ==============================================
// LAZYLOAD
=============================================== */  
$(function() {
   $(".lazy").lazyload({
     effect : "fadeIn",
     threshold : 400
   });
});

/* ==============================================
Navigation
=============================================== */	

(function() {
    $.fatNav();
}());


/* ==============================================
Home page hover thingy
=============================================== */	
(function($) {
    $.fn.Menu = (function() {

        function rotateZindex(currentMenuItem) {
            var
                $currentContent = $($('a', currentMenuItem).attr('id')),
                $contentContainer = $currentContent.closest('.projects-list'),
                $contentItems = $('> div', $contentContainer),
                numItems = $contentItems.length;

            $contentItems.not($currentContent)
                .css('z-index', function(i, val){ return val - 1; })
                .fadeOut();

            $currentContent
                .css('z-index', numItems)
                .fadeIn();
        }

        $(this)
            .each(
                function()
                {
                    $('.menu-item', this)
                        .mouseover(
                            function()
                            {
                                rotateZindex(this);
                            }
                        );
                }
            );

    });
})(jQuery);

$(document).ready(function() {
    $('.project-menu').Menu();
});





