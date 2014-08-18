
function server_graph_taula(){ // taula total

var token = localStorage.getItem('token');
var datax;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
	
	 var table ='<table> ';
	 table+='<tr><th>' + document.getElementById('graf_ta_data').innerHTML + '</th><th>' + document.getElementById('graf_ta_si').innerHTML + '</th><th>' + document.getElementById('graf_ta_di').innerHTML + '</th><th>' + document.getElementById('graf_ta_p').innerHTML + '</th></tr>';
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var data = taken[0].split('-');
		if(taken[0]==datax){
		}else{
			datax=taken[0];
			table+='<tr><td>'+data[2]+'/'+data[1]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td><td>'+item.pulse+'</td></tr>';
		}
     });
     table+='</table>';
	 
     $("#grf_table_taula").html(table);	
});

}


function server_graph_all(){ //grafica total

var token = localStorage.getItem('token');
var datax;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
		
	 var table ='<table> ';
	 table+='<tr><th>' + document.getElementById('graf_ta_data').innerHTML + '</th><th>' + document.getElementById('graf_ta_si').innerHTML + '</th><th>' + document.getElementById('graf_ta_di').innerHTML + '</th></tr>';
    	
	 $.each( data, function( index, item){
		
		var taken= (item.dateTaken).split('T');
		var data = taken[0].split('-');
		if(taken[0]==datax){
		}else{
			datax=taken[0];
			if(taken[0]< document.getElementById('datei').value){
			}else if (taken[0]>=  document.getElementById('datef').value) {
				}else{
					 table+='<tr><td>'+data[2]+'/'+data[1]+'/'+data[0]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td></tr>';
				}
		 }
	
     });
     table+='</table>';
	 
     $("#grf_table_all").html(table);	
	
	 grph_all();
});

}

function server_graph_m(){  //grafica matins
	
var token = localStorage.getItem('token');
var datax;	
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
	
	 var table ='<table> ';
	 table+='<tr><th>' + document.getElementById('graf_ta_data').innerHTML + '</th><th>' + document.getElementById('graf_ta_si').innerHTML + '</th><th>' + document.getElementById('graf_ta_di').innerHTML + '</th></tr>';
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var data1 = taken[1].split(':')
		var data = taken[0].split('-');
		if(taken[0]==datax){
		}else{
			datax=taken[0];
			if(taken[0]< document.getElementById('datei_m').value){
			}else if (taken[0]>=  document.getElementById('datef_m').value) {
				}else{
			
				if( data1[0]<'16'){
				table+='<tr><td>'+data[2]+'/'+data[1]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td></tr>';
				}
			}
		}
     });
     table+='</table>';
	 
     $("#grf_table_m").html(table);	
	
	 grph_mati();
});

}


function server_graph_t(){  //grafica tardes

var token = localStorage.getItem('token');
var datax;	
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
	
	 var table ='<table> ';
	 table+='<tr><th>' + document.getElementById('graf_ta_data').innerHTML + '</th><th>' + document.getElementById('graf_ta_si').innerHTML + '</th><th>' + document.getElementById('graf_ta_di').innerHTML + '</th></tr>';
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var data1 = taken[1].split(':')
		var data = taken[0].split('-');
		if(taken[0]==datax){
		}else{
			datax=taken[0];
			if(taken[0]< document.getElementById('datei_t').value){
			}else if (taken[0]>=  document.getElementById('datef_t').value) {
				}else if( data1[0]>='16'){
					table+='<tr><td>'+data[2]+'/'+data[1]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td></tr>';
					}
				
		}
     });
     table+='</table>';
	 
     $("#grf_table_t").html(table);	
	
	 grph_tarda();
});

}

function server_graph_res(){ // taula resultats
	
var token = localStorage.getItem('token');
var datax;	
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restList/'+ token, function(data){
	
	 var table ='<table> ';
	 table+='<tr><th>' + document.getElementById('graf_ta_data').innerHTML + '</th><th>' + document.getElementById('graf_ta_si').innerHTML + '</th><th>' + document.getElementById('graf_ta_di').innerHTML + '</th></tr>';
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var data = taken[0].split('-');
		if(taken[0]==datax){
		}else{
			datax=taken[0];
			table+='<tr><td>'+data[2]+'/'+data[1]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td></tr>';
		}
     });
     table+='</table>';
	 
     $("#grf_resultats").html(table);	
	 grph_res();
});

}




