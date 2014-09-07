function inici_server_pacient(token){
	
$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatient/restShow/'+ token, function(perfil){
    
	
	server_centres(perfil.patient.organization.id);
	document.getElementById("Image").src= 'http://app2.hesoftgroup.eu/hypertensionPatient/restDownloadProfileImage/'+ token;

	document.getElementById('nom').innerHTML = perfil.patient.name;
	document.getElementById('me_nom').innerHTML = perfil.patient.name + '  ' + perfil.patient.firstSurname;
	document.getElementById('cognom').innerHTML = perfil.patient.firstSurname + '  ' + perfil.patient.secondSurname;
	
	var birth= (perfil.patient.birthDate).split('T');
    var data = birth[0].split('-');
	document.getElementById('birth').innerHTML =  data[2]+'/'+data[1]+'/'+data[0];
	var genere;
	if(perfil.patient.gender==true){ genere=(document.getElementById('gender_m').innerHTML);}else{genere=(document.getElementById('gender_f').innerHTML);}
	document.getElementById('gender').innerHTML = genere;
	document.getElementById('telu').innerHTML = perfil.patient.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.patient.email;
	document.getElementById('notificacions').innerHTML =perfil.patient.statusQuestionSendType;
	document.getElementById('pas').innerHTML =perfil.sbp;
	document.getElementById('pad').innerHTML =perfil.dbp;
	dates(perfil.patient.statusQuestionSendType);
});

}


function server_pacient(token){

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatient/restShow/'+ token, function(perfil){
    
	server_centres(perfil.patient.organization.id);
	document.getElementById("Image").src= 'http://app2.hesoftgroup.eu/hypertensionPatient/restDownloadProfileImage/'+ token;

	document.getElementById('nom').innerHTML =  perfil.patient.name;
	document.getElementById('me_nom').innerHTML =perfil.patient.name + '  ' + perfil.patient.firstSurname;
	document.getElementById('cognom').innerHTML = perfil.patient.firstSurname + '  ' + perfil.patient.secondSurname;
	var birth= (perfil.patient.birthDate).split('T');
    var data = birth[0].split('-');
	document.getElementById('birth').innerHTML =  data[2]+'/'+data[1]+'/'+data[0];
	var genere;
	if(perfil.patient.gender==true){ genere=(document.getElementById('gender_m').innerHTML);}else{genere=(document.getElementById('gender_f').innerHTML);}
	document.getElementById('gender').innerHTML = genere;
	document.getElementById('telu').innerHTML = perfil.patient.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.patient.email;
	document.getElementById('notificacions').innerHTML =perfil.patient.statusQuestionSendType;
	document.getElementById('pas').innerHTML =perfil.sbp;
	document.getElementById('pad').innerHTML =perfil.dbp;
	
	
});

}

