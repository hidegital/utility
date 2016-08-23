//cssアニメーション終了告知

//csstransition
$target.on('"oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend"',function(){
    //処理
});

//csskeyframes
$target.on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd',function(){
    //処理
});
