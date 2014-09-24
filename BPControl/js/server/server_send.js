
function server_send(){	
	
	
	var uuid = localStorage.getItem('token');	
	if(document.getElementById('notificacions').value==1){} //si es quinzenal establim notificació
	else{dates(document.getElementById('notificacions').value);}
	
	var url='http://app2.hesoftgroup.eu/hypertensionBloodPressure/restSave';
	var date1= '{"uuid":' + uuid + ',"systole1m":' + document.getElementById('pst1m').value + ',"systole2m":' + document.getElementById('pst2m').value + ',"systole3m":' + document.getElementById('pst3m').value + ',"systole1n":' + document.getElementById('pst1t').value + ',"systole2n":' + document.getElementById('pst2t').value + ',"systole3n":' + document.getElementById('pst3t').value + ',"diastole1m":' + document.getElementById('pdt1m').value + ',"diastole2m":' + document.getElementById('pdt2m').value + ',"diastole3m":' + document.getElementById('pdt3m').value + ',"diastole1n":' + document.getElementById('pdt1t').value + ',"diastole2n":' + document.getElementById('pdt2t').value + ',"diastole3n":' + document.getElementById('pdt3t').value + ',"pulse1m":' + document.getElementById('pt1m').value + ',"pulse2m":' + document.getElementById('pt2m').value + ',"pulse3m":' + document.getElementById('pt3m').value + ',"pulse1n":' + document.getElementById('pt1t').value + ',"pulse2n":' + document.getElementById('pt2t').value + ',"pulse3n":' + document.getElementById('pt3t').value + '}';

	$.ajax({
		url: url,
		type:'post',
    	data: date1,
		contentType:'application/json',
		success: function(data) {  
						
			//posem el video a resultats
			document.getElementById("vid_resultats").src= 'http://www.youtube.com/embed/'+ data.infoLink;	
			//comprovem que no existeix el video i el guardem
			var count = parseInt(localStorage.getItem('count')) || 0; 
			var i=0, a=0;
			for(i=0; i<=count; i++){
				var videos = localStorage.getItem('videos'+i);
				if (videos==data.infoLink){a=1}
			}
			if (a==0){
				count=count+1;
				localStorage.setItem('count', count);
				localStorage.setItem('videos'+count,data.infoLink);
				vid(); 
			}
			
			//guardem estat del pacient + data + mitjana mesures
			var sysm=parseInt((parseInt(document.getElementById('pst2m').value) + (parseInt( document.getElementById('pst3m').value)))/2);
			var syst=parseInt((parseInt(document.getElementById('pst2t').value) + (parseInt( document.getElementById('pst3t').value)))/2);
			var sys=((sysm+syst)/2);
			
			var dysm=parseInt((parseInt(document.getElementById('pdt2m').value) + (parseInt( document.getElementById('pdt3m').value)))/2);
			var dyst=parseInt((parseInt(document.getElementById('pdt2t').value) + (parseInt( document.getElementById('pdt3t').value)))/2);
			var dys=((dysm+dyst)/2);
			var mesure= (parseInt(sys)).toString() +'-'+ (parseInt(dys)).toString();
			
			var cnt = parseInt(localStorage.getItem('cnt')) || 0; 
			cnt=cnt+1;
			localStorage.setItem('cnt', cnt);
			localStorage.setItem('estat'+ cnt,data.patientStatus+'*'+Date.now().toString("yyyy-MM-ddTHH:mm:ss")+'*'+mesure);
			estat();
			
			//pintem la grafica			
			server_graph_res();
			
			//creem resultats
			ok(data.patientStatus);
			
			//tot correcte
			//navigator.notification.alert(
			//	 		document.getElementById('server_send_mis').innerHTML,
			//	 		null,
			//	 		'BPControl',
			//	 		'Done'
			//			);	 
		},
		
		error: function(){
			
	        navigator.notification.confirm(
				document.getElementById('server_send_mis1').innerHTML,
				null,
				'Error',
				'No,Yes'
			);
			
		 },
	 });
	 
	 
	 

}
