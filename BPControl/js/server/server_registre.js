// COMPROVACIO TELEFON

function tel(){
	
	var prefix = $(document.getElementById("prefix")).val();
	var telefon = $(document.getElementById("tel")).val();
	
	arxiuValidacio = "http://app2.hesoftgroup.eu/hypertensionPatient/restValidateMobile/"+ prefix + telefon;  
	
	$.getJSON(arxiuValidacio);
	$.mobile.changePage("#sms1");

}; //  /comprovacio telèfon



// COMPROVACIÓ SMS

function sms(){
		var prefix = $(document.getElementById("prefix")).val();
		var telefon = $(document.getElementById("tel")).val();
		var code= $(document.getElementById("smsin")).val();
		
		arxiuValidacio = "http://app2.hesoftgroup.eu/hypertensionPatient/restValidateCode/" + prefix + telefon + "?code=" + code;
		
		$.getJSON(arxiuValidacio, function(server){
				
				var token = server.uuid;		//guardem identificació pacient
				crg();  //efecte loading		
				localStorage.setItem("token", token);
				inici_server_pacient(token); 	// carreguem dades pacient
				server_admin_p();
				server_missatges(); //carreguem xat
				estat();	//carreguem estats
				server_graph_taula();		//carreguem dades gràfica
				//server_graph_res();
				p61(); //establim grafiques
				p71();
				p81();
				p93();
				vid();//carreguem videos
				setTimeout(function(){$.mobile.changePage("#perfil");},0);
				setTimeout(function(){crgoff();}, 20000); //fi efecte loading		
		
		});
	
}; //  /comprovacio sms
