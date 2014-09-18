
function estat(){ // taula estat
	var datax;
	var table ='<table id="est" > ';
	table+='<thead><tr><th>' + document.getElementById('estat_data').innerHTML + '</th><th>' + document.getElementById('estat_hora').innerHTML + ' </th><th>' + document.getElementById('estat_estat').innerHTML + '</th><th>' + document.getElementById('estat_mesures').innerHTML + '</th></tr></thead><tbody>';
	var cnt = parseInt(localStorage.getItem('cnt')) || 0; 
	var i=0;
	if(cnt==0 || cnt==null || cnt=='<empty>'){}
	else{
		for(i=1; i<=cnt; i++){
			var estat_all = localStorage.getItem('estat'+i);
			var estat = estat_all.split('*');
			if (parseInt(estat[0])==0){var aux='img/semafor/semafor_green.jpg';}
			else{
				if(parseInt(estat[0])==1){var aux='img/semafor/semafor_red.jpg';}
				else{var aux='img/semafor/semafor_yellow.jpg';}
				}		
			var data_all = estat[1].split('T');
			var data_p=data_all[1].split(':'); 
			var data=data_all[0].split('-');
			if(data_all[0]==datax){
			}else{
				datax=data_all[0];
				table+='<tr id="est_tr"><td>'+data[2]+'/'+data[1]+'</td><td>'+data_p[0]+':'+data_p[1]+'</td><td><img align:center width="15" height="44"src="'+aux+'"/></td><td>'+estat[2]+'</td></tr>';
			}
		}	
	}
	table+='</tbody></table>';
	
	$("#estat_pacient_taula").html(table);	
	reverseTableRows('est'); //girem la taula		
}
	 
    