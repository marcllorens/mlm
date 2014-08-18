function server_missatges(token){

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatientChat/restList/'+ token, function(missatge){
    
	 var div='<empty>';
	
	$.each( missatge, function( index, item){
			if(item.user==null){
			div+='<div id="xat_usuari">'+item.text+'</div>';
			}else{
				div+='<div id="xat_metge">'+item.text+'</div>';
			}	 	   
   	
     });

	  $("#xat_container").html(div);
	
});

}

