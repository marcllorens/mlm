function server_missatges(){

var token = localStorage.getItem('token') || '<empty>'; 

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatientChat/restList/'+ token, function(missatge){
    
	 var div='<empty>';
	
	$.each( missatge, function( index, item){
			if(item.user==null){
				var creat= (item.dateCreated).split('T');
				var girat= creat[0].split('-');
				var hora = creat[1].split(':');
				var horan=parseInt(hora[0])+2;
				div+='<div id="xat_hora_u">'+girat[2]+'-'+girat[1]+'-'+girat[0]+' ...  '+horan+':'+hora[1]+'</div>';
				div+='<div id="xat_usuari">'+item.text+'</div>';
			}else{
				var creat= (item.dateCreated).split('T');
				var girat= creat[0].split('-');
				var hora = creat[1].split(':');
				var horan=parseInt(hora[0])+2;
				div+='<div id="xat_hora_m">'+girat[2]+'-'+girat[1]+'-'+girat[0]+' ...  '+horan+':'+hora[1]+'</div>';
				div+='<div id="xat_metge">'+item.text+'</div>';
			}	 	   
   	
     });
	 
	 
	  $("#xat_container").html(div);
	
});

}

