function server_send_mis(){

	var uuid = localStorage.getItem('token');
	var url='http://app2.hesoftgroup.eu/hypertensionPatientChat/restSave';
	var data= '{"uuid":' + uuid + ',"text":' + document.getElementById('mis_text').value + '}'
	$("#xat_container1").html('<div id="xat_usuari">'+document.getElementById('mis_text').value+'</div>')
	$.ajax({
		url: url,
		type:'post',
    	data: data,
		contentType:'application/json',
		/*success: function(data) {         	
			navigator.notification.alert(
				 'missatge enviat',
				 null,
				 'BPControl',
				 'Done'
			);
		},
		
		error: function(){
	        navigator.notification.confirm(
				'No s´han pogut enviar el missatge. Ho vol reintentar?',
				null,
				'Error',
				'No,Yes'
			);
		}*/
		
	});	
	server_missatges();
	$("#xat_container1").html('<div id="xat_usuari">'+document.getElementById('mis_text').value+'</div>')
	
	 document.getElementById('mis_text').value=null;	
}
