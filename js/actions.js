$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		//Brújula
		var watchID = null;
		$('#bInc').tap(function(){
			watchID = navigator.compass.watchHeading(function(heading){
				$('#bRes').text(heading.magneticHeading);
			}, function(compassError){
					alert('Compass error: ' + compassError.code);
			}, { frequency: 500 });
		});
		$('#bDtn').tap(function(){
			navigator.compass.clearWatch(watchID);
			watchID = null;
			$('#bRes').text('0.000');
		});
		
		//Acelerometro
		
		var awatchID = null;
				$('#aInc').tap(function(){
			awatchID = navigator.accelerometer.watchAcceleration(function(acceleration){
				$('#aRES').html('Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' + 
                            'Timestamp: '      + acceleration.timestamp + '<br />'
);
			}, function(accError){
					alert('Acelerometro error: ' + accError.code);
			}, { frequency: 500 });
		});
		$('#aDtn').tap(function(){
			navigator.accelerometer.clearWatch(awatchID);
			awatchID = null;
			$('#aRes').text('Detenido');
		});
		
		//Globalizacion
		navigator.globalization.getPreferredLanguage(
  function (language) {
	  $('#gRes').text(language.value);
	  },
  function () {alert('Error getting language\n');}
);

		
		
		
				
	}, false);
});