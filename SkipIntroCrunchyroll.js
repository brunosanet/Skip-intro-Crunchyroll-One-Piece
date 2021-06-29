window.onload = function() {	
	
var makeFullScreen = () => {

let divVideo = document.querySelector('#showmedia_video_player');

divVideo.removeAttribute('style');

Object.assign(divVideo.style, {
      position: 'fixed',
      zIndex: 1000,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100%'
    });
	
	window.scroll(0, 70);	
	document.querySelector('body').style.overflowY = 'hidden';
}


var skipIntroEpisodios = () => {
	
	var urlLegenda = document.body.innerHTML.match("\"language\":\"ptBR\",\"url\":\"https:\\\\/\\\\/v.vrv.co\\\\/evs\\\\/.+\",\"title\":\"Portu")[0]
						.replaceAll('\\','').substring(25).slice(0,-16);
						
	console.log(urlLegenda);
	
	fetch(urlLegenda)
	.then((response) => response.text()
	.then( (text)=> obtemRetorno(text)));
	
	var obtemRetorno = function(text){
		
		var inicioEp = text.match('[0-9]{2}:[0-9]{2}.[0-9]{2},Episode Title')[0].slice(0,5);		
		console.log(inicioEp);
		
		var arr = inicioEp.split(':');		
	
		var tempoEmsegundos = parseInt(arr[0]) * 60 ;
		tempoEmsegundos += parseInt(arr[1]);	
	
		console.log(tempoEmsegundos)
	
		window.wrappedJSObject.VILOS_PLAYERJS.setCurrentTime(tempoEmsegundos);		
	}
	
}

makeFullScreen();
skipIntroEpisodios();
	
};
  