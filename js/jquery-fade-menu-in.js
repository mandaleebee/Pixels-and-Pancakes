// jQuery Functions

$(window).scroll(function(){

    if ($(this).scrollTop() > 800) {
        $('.menu-bar').fadeOut();
    }
    else {
       if ($(this).scrollTop() > 300) {
           $('.menu-bar').fadeIn();
       } else {
           $('.menu-bar').fadeOut();
       }
    }
});