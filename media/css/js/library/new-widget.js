!(function($){

	// comment input label appear / disappear on focus / blur.
	$(".widget input[type=text]").focus(function(){
		$(this).prevAll("label").click();
	});
	$(".widget input[type=text]").blur(function(){
		if ( "" == $(this).val() || $(this).defaultValue == $(this).val() )
		{
			$(this).prevAll("label").fadeIn();
		}
	});
	$(".widget label").click(function(){
		$(this).fadeOut();
	});
		
	// uniform 
	if ($.uniform)
	{
		//$("select").uniform();
	}

})(jQuery);