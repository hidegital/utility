module.exports =
{
    hambuger : function(_touch) {

        var openMenuFlg = false;
        var $targetIcon = $('.navIcon');
        var $targetLayer = $('[data-target-under-layer]');

        var menuOpen = function() {
            $targetIcon.on(_touch, function () {
                $('.menu').css('display', 'block');
                $targetLayer.removeClass('is-off').addClass('is-on');
                $('html').css({"overflow": "hidden", "height": "100%"});
                TweenLite.to(
                    ".menu",
                    .5, {
                        right: "0%",
                        ease: Expo.easeOut,
                        onComplete : function(){
                            openMenuFlg = true;
                        }
                    });
                $('body').addClass('is-menu-fixed ');
                $('a').addClass('is_void');
                $('.sp-header a').removeClass('is_void');
            });
        };

        var otherTouch = function() {
            $(window).on(_touch,function(t){
                if(!openMenuFlg) return;
                if($(t.target).hasClass('menu') || $(t.target).parents().hasClass('menu')) return;
                openMenuFlg = false;
                TweenLite.to(
                    ".menu",
                    .7, {
                        right: "-100%",
                        ease: Expo.easeOut,
                        onComplete: function () {
                            $('.menu').css('display', 'none');
                            $('a').removeClass('is_void');
                        }
                    });
                $targetLayer.removeClass('is-on').addClass('is-off');
                $('html').css({"overflow": "visible", "height": "100%"});
                $('body').removeClass('is-menu-fixed');
            });
        };

        var noScroll = function() {
            if(openMenuFlg) {
                $(window).on('touchmove.noScroll', function (e) {
                    e.preventDefault();
                });
            }else{
                $(window).off('.noScroll', function (e) {
                    e.preventDefault();
                });
            }
        };

        var winHeight = function() {
            var winH = window.screen.height;
            $('.menu').css({
                'height': winH + 'px'
            });
        };

        var accordionFnc = function() {
            var $trigger = $('[data-trigger-haccordion]'),
                $target  = $('[data-target-haccordion]');
            $target.css('display','none');
            $trigger.on(_touch,function(e){
                $(this).each(function(){
                    if($(this).hasClass('is-open-accordion')){
                        $(this).removeClass('is-open-accordion');
                    } else {
                        $(this).addClass('is-open-accordion');
                    }
                });
                $(e.target).find('[data-target-haccordion]').slideToggle();
            });
        };

        menuOpen();
        winHeight();
        otherTouch();
        accordionFnc();
        noScroll();

        $(window).resize(function(){
            winHeight();
        });
    }
}



