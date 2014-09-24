function server_send_mis(){
	if(document.getElementById('mis_text').value==null || document.getElementById('mis_text').value == '<empty>'|| document.getElementById('mis_text').value=='' ){}
	else{
		var uuid = localStorage.getItem('token');
		var url='http://app2.hesoftgroup.eu/hypertensionPatientChat/restSave';
		var data= '{"uuid":' + uuid + ',"text":' + document.getElementById('mis_text').value + '}'
		
		$.ajax({
			url: url,
			type:'post',
			data: data,
			contentType:'application/json',
		});	
		
		setTimeout(function(){server_missatges();}, 400);
		document.getElementById('mis_text').value=null;	
	}
}
