function server_missatges(){
	
//versió del dret

var token = localStorage.getItem('token') || '<empty>'; 

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatientChat/restList/'+ token, function(missatge){
    
	 var div='<empty>';
	
	$.each( missatge, function( index, item){
			if(item.user==null){
				var creat= (item.dateCreated).split('T');
				var girat= creat[0].split('-');
				var hora = creat[1].split(':');
				div+='<div id="xat_hora_u">'+girat[2]+'-'+girat[1]+'-'+girat[0]+' ...  '+hora[0]+':'+hora[1]+'</div>';
				div+='<div id="xat_usuari">'+item.text+'</div>';
			}else{
				var creat= (item.dateCreated).split('T');
				var girat= creat[0].split('-');
				var hora = creat[1].split(':');
				div+='<div id="xat_hora_m">'+girat[2]+'-'+girat[1]+'-'+girat[0]+' ...  '+hora[0]+':'+hora[1]+'</div>';
				div+='<div id="xat_metge">'+item.text+'</div>';
			}	 	   
   	
     });

	  $("#xat_container").html(div);
	
});



//versió del revés	
	
/*var token = localStorage.getItem('token') || '<empty>'; 

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatientChat/restList/'+ token, function(missatge){
   
	 var table ='<table id="mis"> ';
	 table+='<thead><tr>string</tr></thead><tbody>';
	 
     $.each( missatge, function( index, item){
		table+='<tr id="sr"><td>'+item.dateCreated+'*'+item.text+'*'+item.user+'</td></tr>';					
     });
	
     table+='</tbody></table>';
	 
     $("#mis_table").html(table);	
	 reverseTableRows('mis'); //girem la taula
	 
	 var tab = document.getElementById('mis_table');
 	 var cells = tab.getElementsByTagName('td');
	 var div='<empty>';
	
	 for (var i=0,len=cells.length; i<len; i++){
        var str= (cells[i].innerText).split('*');      	 		
		if(str[2]=='null'){
			var creat= (str[0]).split('T');
			var girat= creat[0].split('-');
			var hora = creat[1].split(':');
			div+='<div id="xat_hora_u">'+girat[2]+'-'+girat[1]+'-'+girat[0]+' ...  '+hora[0]+':'+hora[1]+'</div>';
			div+='<div id="xat_usuari">'+str[1]+'</div>';
		}else{
			var creat= (str[0]).split('T');
			var girat= creat[0].split('-');
			var hora = creat[1].split(':');
			div+='<div id="xat_hora_m">'+girat[2]+'-'+girat[1]+'-'+girat[0]+' ...  '+hora[0]+':'+hora[1]+'</div>';
			div+='<div id="xat_metge">'+str[1]+'</div>';
		}
	}
    $("#xat_container").html(div);
	
	
	$.mobile.silentScroll(1000);
	alert("actualitzat");
	});*/
}

