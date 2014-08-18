function server_send(){

	var uuid = localStorage.getItem('token');
	
	if(document.getElementById('notificacions').value==1){} //si es quinzenal establim notificació
	else{dates(document.getElementById('notificacions').value);}
	
	var url='http://app2.hesoftgroup.eu/hypertensionBloodPressure/restSave';
	
	var date1= '{"uuid":' + uuid + ',"systole1m":' + document.getElementById('pst1m').value + ',"systole2m":' + document.getElementById('pst2m').value + ',"systole3m":' + document.getElementById('pst3m').value + ',"systole1n":' + document.getElementById('pst1t').value + ',"systole2n":' + document.getElementById('pst2t').value + ',"systole3n":' + document.getElementById('pst3t').value + ',"diastole1m":' + document.getElementById('pdt1m').value + ',"diastole2m":' + document.getElementById('pdt2m').value + ',"diastole3m":' + document.getElementById('pdt3m').value + ',"diastole1n":' + document.getElementById('pdt1t').value + ',"diastole2n":' + document.getElementById('pdt2t').value + ',"diastole3n":' + document.getElementById('pdt3t').value + ',"pulse1m":' + document.getElementById('pt1m').value + ',"pulse2m":' + document.getElementById('pt2m').value + ',"pulse3m":' + document.getElementById('pt3m').value + ',"pulse1n":' + document.getElementById('pt1t').value + ',"pulse2n":' + document.getElementById('pt2t').value + ',"pulse3n":' + document.getElementById('pt3t').value + '}'
	
	$.ajax({
		url: url,
		type:'post',
    	data: date1,
		contentType:'application/json',
		success: function(data) {         	
			document.getElementById('patientStatus').value =data.patientStatus;
			document.getElementById('infoLink').value =data.infoLink;
			document.getElementById("vid_resultats").src= 'http://www.youtube.com/embed/'+ data.infoLink;	
			var ltoken = localStorage.getItem('token');
			server_graph_res(ltoken);
			alert("abans natification");
			navigator.notification.alert(
				 'Hem rebut les seves pressions correctament',
				 ok(),
				 'BPControl',
				 'Done'
			);
		},
		
		error: function(){
	        navigator.notification.confirm(
				'No s´han pogut enviar les dades. Ho vol reintentar?',
				null,
				'Error',
				'No,Yes'
			);
		}
		
	});		
}
