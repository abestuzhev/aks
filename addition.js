$(function(){

	var text = '';
	function splitText(textElem){
		text = $(textElem).html();
		var arrText = text.split('. ');
		// for (var i = 0; i < arrText.length; i++) {
		//   arrText[0] = arrText[0] + '.'
		// }
		$(textElem).html(arrText[0]);
	}


	if($(window).width() <= 767){
		splitText('.earth p');
		splitText('.globe p');
		splitText('.ship p');
		splitText('.news p');
	}

	$(window).resize(function(){

		if($(window).width() <= 767){
			console.log($(window).width());
			splitText('.earth p');
			splitText('.globe p');
			splitText('.ship p');
			splitText('.news p');
		}
	});
	

});