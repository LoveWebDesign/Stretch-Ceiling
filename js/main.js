jQuery(document).ready(function() {
	jQuery('.slider').slick({
					  arrows: true,
					  fade: true,
					  dots: true,
					  autoplay: true,
					  autoplaySpeed: 10000,
					  });
	jQuery(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = jQuery(this).attr('href'),
            top = jQuery(id).offset().top;
        jQuery('body,html').animate({scrollTop: top}, 700);
    		});
});