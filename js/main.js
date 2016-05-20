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
	jQuery(function($){
		jQuery('#phone, #popup-phone').mask("+38 (099) 999-99-99",{autoclear: false});
	});

	jQuery('.apply').click(function(event) {
				event.preventDefault();
				jQuery('.blackout').fadeIn(400,
					function(){
						jQuery('.pop-up')
							.css('display', 'block')
							.animate({opacity: 1, top: '50%'}, 200);
					});
			});
			jQuery('.blackout, .cancel').click(function(){
				jQuery('.pop-up')
					.animate({opacity: 0, top: '45%'}, 200,
						function(){
							jQuery(this).css('display', 'none');
							jQuery('.blackout').fadeOut(400);

						});
			});


			(function( $ ){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

  
  if(jQuery('.footer-form, .popup-form').exists()){
    
    var form = $('.footer-form, .popup-form'),
      btn = form.find('.btn-submit');
    
    form.find('.required-field').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#phone').exists()){
        var pmc = $('#phone #popup-phone');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
      }
      
      var sizeEmpty = form.find('.empty_field').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});
});