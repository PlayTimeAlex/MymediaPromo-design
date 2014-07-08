(function($) {
    $(document).ready(function(){
        //colorbox video
        $('.b-video__link').colorbox({
            iframe:true,
            innerWidth:640,
            innerHeight:390,
            close:""
        });
        $('.b-portfolio__link, .b-lworks__rm a').colorbox({
            close: "",
            /*width: "90%",
            height: "90%",*/
            onClosed: function(){
                $('html, body').animate({
                    scrollTop: $('#works').offset().top - $('.b-header__bottom').outerHeight()
                }, 500);
            }
        });

        $(window).scroll(function(){
            if($(window).scrollTop() > 64){
                $('.b-header').addClass('fixed');
            } else {
                $('.b-header').removeClass('fixed');
            }
        });
        jQuery('.layer').parallax({
            mouseport: jQuery("#test")
        });

        //scroll
        function scrollto_c(elem) {
            $('html, body').animate({
                scrollTop: $(elem).offset().top - $('.b-header__bottom').outerHeight()
            }, 1000);
        }

        $('.anim-scroll').click(function () {
            scrollto_c($(this).attr('href'));
            return false;
        });
        $('.b-header__logo').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        //spoiler
        $('.b-spoiler__header').click(function(){
            var parent = $(this).parent();
            if($(this).parent().hasClass('open')){
                $(this).siblings('.b-spoiler__content').stop().slideUp('fast', function(){
                    parent.removeClass('open');
                });
            } else {
                $(this).siblings('.b-spoiler__content').stop().slideDown('fast', function(){
                    parent.addClass('open');
                });
            }

        });

        //lworks
        $('.b-lworks__title').click(function(){
            var container = $(this).closest('.b-lworks');
            if(container.hasClass('open')){
                $('.b-lworks__spoiler', container).stop().slideUp('fast', function(){
                    container.removeClass('open');
                });
            } else {
                $('.b-lworks__spoiler', container).stop().slideDown('fast', function(){
                    container.addClass('open');
                });
            }
        });

        //help
        $('.pr-help').hover(function(){
            $(this).html('<div class="pr-help__text">'+$(this).data('text')+'</div>');
            $('.pr-help__text', this).animate({
                opacity: 1
            }, 300);
        }, function(){
            $('.pr-help__text', this).animate({
                opacity: 0
            }, 300, function(){
                $(this).parent().html('');
            });
        });

        var wow = new WOW();
        wow.init();
    });

    $(window).load(function() {
         
    });
}(jQuery));