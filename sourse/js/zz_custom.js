(function($) {
    $(document).ready(function(){
        //colorbox video
        $('.b-video__link').colorbox({
            iframe:true,
            innerWidth:640,
            innerHeight:390,
            close:""
        });
        $('.b-portfolio__link').colorbox({
            close: ""
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
            }, 500);
        }

        $('.anim-scroll').click(function () {
            scrollto_c($(this).attr('href'));
            return false;
        });
    });

    $(window).load(function() {
         
    });
}(jQuery));