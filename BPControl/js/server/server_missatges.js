function server_missatges(token){

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatientChat/restList/'+ token, function(missatge){
    
	 var div='<empty>';
	
	$.each( missatge, function( index, item){
			if(item.user==null){
				var creat= (item.dateCreated).split('T');
				var hora = creat[1].split(':');
				div+='<div id="xat_hora_u">'+creat[0]+' ...  '+hora[0]+':'+hora[1]+'</div>';
				div+='<div id="xat_usuari">'+item.text+'</div>';
			}else{
				var creat= (item.dateCreated).split('T');
				var hora = creat[1].split(':');
				div+='<div id="xat_hora_m">'+creat[0]+' ...  '+hora[0]+':'+hora[1]+'</div>';
				div+='<div id="xat_metge">'+item.text+'</div>';
			}	 	   
   	
     });

	  $("#xat_container").html(div);
	
});

}

