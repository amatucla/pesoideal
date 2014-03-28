function FixNum(num) {
      if ((num < 1) && (num >= 0.1))
         num = "0" + num;
      return num;
}

function calcular(num) {
			var altura = $('input#slider-altura').val();			
			var peso =  $('input#slider-peso').val();	

			var sexo = $('select#sexo').val();
		    
			if (window.localStorage) {
				localStorage.setItem('altura',altura);	
				localStorage.setItem('peso',peso);
				localStorage.setItem('sexo',sexo);
			}
			
			var PIPorc = 0;
			var imc=0;
			var PIdevine=0;
			var PIrobinson= 0;
			var PImiller=0;
			var PIhamwi=0;
			var PIprueba= 0; 
			if (sexo=="v") {
				PIdevine= Math.round ((altura - 152.4)*(0.91) +50);
				PIrobinson= Math.round((altura - 152.4)*(0.748) +52);
				PImiller=Math.round ((altura - 152.4)*(0.555)+56.2);
				PIhamwi=Math.round ((altura - 152.4)*(1.063)+48.2);
				PIprueba= Math.round (22*((altura/100)*(altura/100))); 
			} else if (sexo=="m") {
				PIdevine= Math.round ((altura-152.4)* (0.91) +45.5) ;
				PIrobinson= Math.round((altura - 152.4)* (0.669)+49);
				PImiller= Math.round((altura - 152.4)* (0.5354)+53.1);
				PIhamwi= Math.round((altura - 152.4)* (0.866)+45.5);
				PIprueba= Math.round (22*((altura/100)*(altura/100))); 
			}
			
			var PI=(PIdevine+PIrobinson+PImiller+PIhamwi+PIprueba)/5;
 
			PI = Math.round(PI * 100) / 100;
			PIdevine = Math.round(PIdevine * 100) / 100;
			PIrobinson = Math.round(PIrobinson * 100) / 100;
			PImiller = Math.round(PImiller * 100) / 100;
			PIhamwi = Math.round(PIhamwi * 100) / 100;
			PI= FixNum(PI);
			PIPorc=(peso/PI)*(100);
			PIPorc=Math.round(PIPorc* 100) / 100;
			PIprueba= Math.round(PIprueba * 100) / 100;										
			
			meters = altura / 100
			imc= peso / (meters * meters);
			imc= Math.round(imc * 100) / 100;
			imc= FixNum(imc);
			
			
			var categoria_imc;
			var image_categoria;
			var titulo = 'Atención';
			$('span#categoria').removeClass('ok');
			$('span#titulo_resultado').removeClass('ok');
			
			if (imc <18.5){
					categoria_imc='Desnutrido';
					image_categoria='desnutrido_'+sexo+'.jpg';
					titulo = 'Peligro';
			} else if (imc >=18.5 && imc < 25) {
					categoria_imc='Normal';
					image_categoria='normal_'+sexo+'.jpg';
					$('span#categoria').addClass('ok');
					$('span#titulo_resultado').addClass('ok');
					titulo = '¡Enhorabuena!';
			} else if (imc >=25 && imc < 27) {
					categoria_imc='Sobrepeso grado I';
					image_categoria='sobrepeso_'+sexo+'.jpg';
			} else if (imc >=27 && imc < 30) {
					categoria_imc='Sobrepeso grado II';			
					image_categoria='sobrepeso_'+sexo+'.jpg';
			} else if (imc >=30 && imc < 35) {
					categoria_imc='Obesidad tipo I';	
					image_categoria='obesidad_'+sexo+'.jpg';
			} else if (imc >=35 && imc < 40) {
					categoria_imc='Obesidad tipo II';
					image_categoria='obesidad_'+sexo+'.jpg';
			} else if (imc >=40 && imc < 50) {
					categoria_imc='Obesidad tipo III (morbida)';
					image_categoria='obesidad_'+sexo+'.jpg';
					titulo = 'Peligro';
			} else {
					categoria_imc='Obesidad tipo IV (extrema)';
					image_categoria='obesidad_'+sexo+'.jpg';
					titulo = 'Peligro';
			}
			

			$("#titulo_resultado").html(titulo);
			$("#PI_value").html(PI);
			$("#IMC_value").html(imc);
			$("#PIPorc_value").html(PIPorc);
			$("#categoria").html(categoria_imc);
			$("#categoria_img").html(categoria_imc);
			$('img#categoria_img').attr("src",'css/images/' + image_categoria); 
			
			// Formular PI
			$("#pi_devine").html(PIdevine);
			$("#pi_robinson").html(PIrobinson);
			$("#pi_miller").html(PImiller);
			$("#pi_hamwi").html(PIhamwi);
			$("#pi_lemmens").html(PIprueba);
			$("#pi_ideal").html(PI);
			
			if ((altura >= 100 ) && (altura <= 250 ) && (peso >= 25 ) && (peso <= 250 )) {
				$.mobile.changePage( "#resultado", { transition: "slidedown", changeHash: true });
			} else {
			    $.mobile.loading('hide');
			}
			
}

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

$(function() { 
	$("#slider-altura").focus(function(){
		$(this).val('');
	});
	
	$("#slider-peso").focus(function(){
		$(this).val('');
	});
	
	$("#calcular").click(function() { 
			$.mobile.loading('show', {
					text: "Calculando...",
					textVisible: false
			}); 
			
			setTimeout(function(){calcular();}, 800);
			
			
			return false;
	}); 
	
	$("#aceptar").click(function() { 
		// $.mobile.changePage( "#inicio", { transition: "slidedown",  changeHash: true });
	}); 
	
	$("#info").click(function() { 
		$.mobile.changePage( "#info", { transition: "fade", changeHash: true });
	}); 
	
	$("#aceptar_info").click(function() { 
		$.mobile.changePage( "#inicio", { transition: "fade", changeHash: true });
	});

}); 