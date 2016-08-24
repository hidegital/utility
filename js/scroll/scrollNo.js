//scroll無効
//on
$(window).on('touchmove.noScroll', function(e) {e.preventDefault();});
//off
$(window).off('.noScroll');