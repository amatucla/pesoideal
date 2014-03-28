$(document).bind("mobileinit", function() { 
    $.mobile.defaultPageTransition = "fade";
});

/************************************************************* INICIO ******************/
$(document).on('pageshow', '#inicio',  function() {

	if (window.localStorage) {
		var peso = localStorage.getItem('peso');
		var altura = localStorage.getItem('altura');
		var sexo = localStorage.getItem('sexo');
        
		if (!peso) {
			peso = 70;
		}	
		
		if (!altura) {
			altura = 170;
		}
		
		if (!sexo) {
			sexo = 'v';
		}

		$('input#slider-altura').val(altura);
		$('input#slider-altura').slider('refresh');
	    $('input#slider-peso').val(peso);
		$('input#slider-peso').slider('refresh');
		$('select#sexo option').filter(function(){
			return this.value == sexo;
		}).prop("selected", true);
		
		$('select#sexo').selectmenu('refresh');
		
	}
});
