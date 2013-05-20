// jQuery Functions

// Freeze Nav Bar at the top
jQuery("document").ready(function($){
    
    var nav = $('.nav-container');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
 
});

// Background Cover Fix
$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#body-bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('body-bg-height');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('body-bg-width');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});

// Scrolling Page Navigation
$(document).ready(function() { 
 $('.home').click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
 }); 
 $('.about').click(function() {
  $('html, body').animate({scrollTop:475}, 'slow');
 });
  $('.portfolio, .jump').click(function() {
  $('html, body').animate({scrollTop:668}, 'slow');
 });
});

// Enlarge Gallery Thumbs to 80% Width of Window

$(document).ready(function() { 
 $('.gallery').click(function() {
	 $('#gallery').show('fade', 'slow');
 }); 
}); 