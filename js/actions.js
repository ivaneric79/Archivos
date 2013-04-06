$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('cSend').tap(function(){
		var nom = $('#cNom').val();
		var tel = $('#cTel').val();
		var mov = $('#cMov').val();
		var mail = $('#cMail').val();
		
		//
		var nueCont = navigator.contacts.create();
		
		nueCont.displayName = nom;
		nueCont.nickname = nom;
		
		// crear objeto de nombre contacto
		var nombre = new ContactName();
		nombre.giveName = nom;
		nueCont.name = nombre;
		
		var telefonos = [];
		telefonos[0] = new ContactField('home', tel, false);
        telefonos[1] = new ContactField('mobile', mov, true); // preferred number
        nueCont.phoneNumbers = telefonos;
		
		
		var correos = [];
		correos[0] = new ContactField('home', mail, false);
		nueCont.emails = correos;
		
		
		nueCont.save(function(){
			$('#cNom, #cTel, #cMov, #cMail').val('');
			navigator.notification.alert('Creao satisfactoriamente',null,'Contactos','Aceptar');
			},function(){
			navigator.notification.alert(err.code,null,'Error al crear Contacto','Aceptar');
			}
		
		);

			
			
		});
		
		
		
				
	}, false);
});