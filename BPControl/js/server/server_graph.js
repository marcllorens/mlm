
function server_graph_taula(){ // taula total

var token = localStorage.getItem('token');
var d2=null, pul;
var t15s6=null, t15d6=null, t30s6=null, t30d6=null, t15s8=null, t15d8=null, t30s8=null, t30d8=null;
var sys6=null, sys8=null, systole=null, dia6=null, dia8=null, diastole=null, diastole1=null, systole1=null;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
	 var table ='<table id="tau"> ';
	 table+='<thead><tr><th id="tau_th">' + document.getElementById('graf_ta_data').innerHTML + '</th><th id="tau_th">' + document.getElementById('graf_ta_si').innerHTML + '</th><th id="tau_th">' + document.getElementById('graf_ta_di').innerHTML + '</th><th id="tau_th">' + document.getElementById('graf_ta_p').innerHTML + '</th></tr></thead><tbody>';
	 
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var hora = taken[1].split(':');
		var data = taken[0].split('-');
		var d1=taken[0]+'T'+hora[0]+':'+hora[1];
		if(taken[0]< document.getElementById('datei_tau').value){
		}else if (taken[0]>=  document.getElementById('datef_tau').value) {
		}else{					
		if(d2==d1){
		}else{
			d2=d1; 
			if(hora[1]=='00'){}
			else {							
				if (hora[1]=='15') {
						if(hora[0]=='06'){ 
							t15s6=item.systole;
							t15d6=item.diastole;
						}else{
							t15s8=item.systole;
							t15d8=item.diastole;
						}
				}else{
					if(hora[0]=='06'){
							t30s6=item.systole;
							t30d6=item.diastole;
						}else{
							t30s8=item.systole;
							t30d8=item.diastole;
						}
				}
				
				if(t15s6==null || t15s8==null || t30s6==null ||t30s8==null){}
				else{			
					sys6= ((parseInt(t15s6)+parseInt(t30s6))/2);
					sys8= ((parseInt(t15s8)+parseInt(t30s8))/2);
					systole1= ((parseInt(sys6)+parseInt(sys8))/2);
					dia6= ((parseInt(t15d6)+parseInt(t30d6))/2);
					dia8= ((parseInt(t15d8)+parseInt(t30d8))/2);
					diastole1= ((parseInt(dia6)+parseInt(dia8))/2);
					systole=parseInt(systole1);
					diastole=parseInt(diastole1);
					if(item.pulse==null){pul=0;}else{pul=item.pulse;}
					t15s6=null;
					t15s8=null;
					t30s6=null;
					t30s8=null;
					t15d6=null;
					t15d8=null;
					t30d6=null;
					t30d8=null;			
					table+='<tr><td id="tau_td">'+data[2]+'/'+data[1]+'</td><td id="tau_td">'+systole+'</td><td id="tau_td">'+diastole+'</td><td id="tau_td">'+pul+'</td></tr>';
					systole=null;
					dyastole=null;
				}
			  }
		   }
		}
     });
     table+='</tbody></table>';
	 
	  $("#grf_table_taula").html(table);	
	  
	  reverseTableRows('tau'); //girem la taula
	  
});

}

function reverseTableRows(tableId) {  //funcio girar taula
    var table = document.getElementById(tableId),
        newTbody = document.createElement('tbody'),
        oldTbody = table.tBodies[0],
        rows = oldTbody.rows,
        i = rows.length - 1;
 
    while (i >= 0) {
        newTbody.appendChild(rows[i]);
        i -= 1;
    }
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);
}



function server_graph_all(){ //grafica total


var token = localStorage.getItem('token');
var d2=null, pul;
var t15s6=null, t15d6=null, t30s6=null, t30d6=null, t15s8=null, t15d8=null, t30s8=null, t30d8=null;
var sys6=null, sys8=null, systole=null, dia6=null, dia8=null, diastole=null, diastole1=null, systole1=null;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
	 var table_all ='<table > ';
	 table_all+='<thead><tr><th >' + document.getElementById('graf_ta_data').innerHTML + '</th><th >' + document.getElementById('graf_ta_si').innerHTML + '</th><th >' + document.getElementById('graf_ta_di').innerHTML + '</th><th>' + document.getElementById('graf_ta_p').innerHTML + '</th></tr></thead><tbody>';
	 
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var hora = taken[1].split(':');
		var data = taken[0].split('-');
		var d1=taken[0]+'T'+hora[0]+':'+hora[1];	
		if(taken[0]< document.getElementById('datei').value){
		}else if (taken[0]>=  document.getElementById('datef').value) {
		}else{		
		if(d2==d1){
		}else{
			d2=d1; 		
			if(hora[1]=='00'){}
			else {							
				if (hora[1]=='15') {
						if(hora[0]=='06'){ 
							t15s6=item.systole;
							t15d6=item.diastole;
						}else{
							t15s8=item.systole;
							t15d8=item.diastole;
						}
				}else{
					if(hora[0]=='06'){
							t30s6=item.systole;
							t30d6=item.diastole;
						}else{
							t30s8=item.systole;
							t30d8=item.diastole;
						}
				}				
				if(t15s6==null || t15s8==null || t30s6==null ||t30s8==null){}
				else{			
					sys6= ((parseInt(t15s6)+parseInt(t30s6))/2);
					sys8= ((parseInt(t15s8)+parseInt(t30s8))/2);
					systole1= ((parseInt(sys6)+parseInt(sys8))/2);
					dia6= ((parseInt(t15d6)+parseInt(t30d6))/2);
					dia8= ((parseInt(t15d8)+parseInt(t30d8))/2);
					diastole1= ((parseInt(dia6)+parseInt(dia8))/2);
					systole=parseInt(systole1);
					diastole=parseInt(diastole1);
					if(item.pulse==null){pul=0;}else{pul=item.pulse;}
					t15s6=null;
					t15s8=null;
					t30s6=null;
					t30s8=null;
					t15d6=null;
					t15d8=null;
					t30d6=null;
					t30d8=null;			
					table_all+='<tr><th>'+data[1]+'/'+data[2]+'</th><td>'+systole+'</td><td>'+diastole+'</td><td>'+pul+'</td></tr>';
					systole=null;
					dyastole=null;
				}}
			}
		}
     });
     table_all+='</tbody></table>';
	 	
     $("#grf_table_all").html(table_all);
	  $("#grf_resultats").html(table_all);
	grph_all();
	 
});

}

function server_graph_m(){  //grafica matins
	
var token = localStorage.getItem('token');
var d2=null, pul;
var m15s6=null, m15d6=null, m30s6=null, m30d6=null ;
var sys6=null, msystole=null, dia6=null, mdiastole=null;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
		
	 var table_m ='<table id="taum"> ';
	 table_m+='<thead><tr><th id="taum_th">' + document.getElementById('graf_ta_data').innerHTML + '</th><th id="taum_th">' + document.getElementById('graf_ta_si').innerHTML + '</th><th d="taum_th">' + document.getElementById('graf_ta_di').innerHTML + '</th><th id="taum_th">' + document.getElementById('graf_ta_p').innerHTML + '</th></tr></thead><tbody>';
    	
	 $.each( data, function( index, item){
		
		var taken= (item.dateTaken).split('T');
		var hora = taken[1].split(':');
		var data = taken[0].split('-');
		var d1=taken[0]+'T'+hora[0]+':'+hora[1];
		if(taken[0]< document.getElementById('datei_m').value){
		}else if (taken[0]>=  document.getElementById('datef_m').value) {
		}else{
			if(d2==d1){
			}else{
				d2=d1; 
				if(hora[1]=='00'){}
				else {	
					if (hora[1]=='15') {
							if(hora[0]=='06'){ 
								m15s6=item.systole;
								m15d6=item.diastole;
								
							}else{}
					}else{
						if(hora[0]=='06'){
								m30s6=item.systole;
								m30d6=item.diastole;
							}else{}
					}
					
					if(m15s6==null  || m30s6==null ){}
					else{
						sys6= ((parseInt(m15s6)+parseInt(m30s6))/2);
						dia6= ((parseInt(m15d6)+parseInt(m30d6))/2);
						msystole=parseInt(sys6);
						mdiastole=parseInt(dia6);
						if(item.pulse==null){pul=0;}else{pul=item.pulse;}
						m15s6=null;
						m30s6=null;
						m15d6=null;;
						m30d6=null;		
						table_m+='<tr><th id="taum_td">'+data[1]+'/'+data[2]+'</th><td id="taum_td">'+msystole+'</td><td id="taum_td">'+mdiastole+'</td><td id="taum_td">'+pul+'</td></tr>';
						msystole=null;
						mdyastole=null;	
					}
				}
			}
		}
     });
     table_m+='</tbody></table>';
	 
     $("#grf_table_m").html(table_m);
	grph_mati();
	 
});

}


function server_graph_t(){  //grafica tardes

	
var token = localStorage.getItem('token');
var d2=null, pul;
var t15s6=null, t15d6=null, t30s6=null, t30d6=null ;
var sys6=null, systole=null, dia6=null, diastole=null;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
		
	 var table_t ='<table id="taun"> ';
	 table_t+='<thead><tr><th id="taun_th">' + document.getElementById('graf_ta_data').innerHTML + '</th><th id="taun_th">' + document.getElementById('graf_ta_si').innerHTML + '</th><th id="taun_th">' + document.getElementById('graf_ta_di').innerHTML + '</th><th id="taun_th">' + document.getElementById('graf_ta_p').innerHTML + '</th></tr></thead><tbody>';
    	
	 $.each( data, function( index, item){
		
		var taken= (item.dateTaken).split('T');
		var hora = taken[1].split(':');
		var data = taken[0].split('-');
		var d1=taken[0]+'T'+hora[0]+':'+hora[1];
		if(taken[0]< document.getElementById('datei_t').value){
		}else if (taken[0]>=  document.getElementById('datef_t').value) {
		}else{						
			if(d2==d1){
			}else{
				d2=d1; 				
				if(hora[1]=='00'){}
				else {					
					if (hora[1]=='15') {
							if(hora[0]=='18'){ 
								t15s6=item.systole;
								t15d6=item.diastole;
							}else{}
					}else{
						if(hora[0]=='18'){
								t30s6=item.systole;
								t30d6=item.diastole;
							}else{}
					}
					
					if(t15s6==null  || t30s6==null ){}
					else{
						sys6= ((parseInt(t15s6)+parseInt(t30s6))/2);
						dia6= ((parseInt(t15d6)+parseInt(t30d6))/2);
						systole=parseInt(sys6);
						diastole=parseInt(dia6);
						if(item.pulse==null){pul=0;}else{pul=item.pulse;}
						t15s6=null;
						t30s6=null;
						t15d6=null;;
						t30d6=null;		
						table_t+='<tr><th id="taun_td">'+data[1]+'/'+data[2]+'</th><td id="taun_td">'+systole+'</td><td id="taun_td" >'+diastole+'</td><td id="taun_td">'+pul+'</td></tr>';
						systole=null;
						dyastole=null;
					}
				}
			}
		}
     });

     table_t+='</tbody></table>';
	 
     $("#grf_table_t").html(table_t);	
	 grph_tarda();
	 
});

}


function server_graph_res(){ // taula total

var token = localStorage.getItem('token');
var d2=null, pul;
var t15s6=null, t15d6=null, t30s6=null, t30d6=null, t15s8=null, t15d8=null, t30s8=null, t30d8=null;
var sys6=null, sys8=null, systole=null, dia6=null, dia8=null, diastole=null, diastole1=null, systole1=null;
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restListAll/'+ token, function(data){
	 var tabler ='<table id="taur" > ';
	 tabler+='<thead><tr><th id="taur_th">' + document.getElementById('graf_ta_data').innerHTML + '</th><th id="taur_th">' + document.getElementById('graf_ta_si').innerHTML + '</th><th id="taur_th">' + document.getElementById('graf_ta_di').innerHTML + '</th><th id="taur_th">' + document.getElementById('graf_ta_p').innerHTML + '</th></tr></thead><tbody>';
	 
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var hora = taken[1].split(':');
		var data = taken[0].split('-');
		var d1=taken[0]+'T'+hora[0]+':'+hora[1];
		if(taken[0]< document.getElementById('datei_tau').value){
		}else if (taken[0]>=  document.getElementById('datef_tau').value) {
		}else{					
		if(d2==d1){
		}else{
			d2=d1; 
			if(hora[1]=='00'){}
			else {							
				if (hora[1]=='15') {
						if(hora[0]=='06'){ 
							t15s6=item.systole;
							t15d6=item.diastole;
						}else{
							t15s8=item.systole;
							t15d8=item.diastole;
						}
				}else{
					if(hora[0]=='06'){
							t30s6=item.systole;
							t30d6=item.diastole;
						}else{
							t30s8=item.systole;
							t30d8=item.diastole;
						}
				}
				
				if(t15s6==null || t15s8==null || t30s6==null ||t30s8==null){}
				else{			
					sys6= ((parseInt(t15s6)+parseInt(t30s6))/2);
					sys8= ((parseInt(t15s8)+parseInt(t30s8))/2);
					systole1= ((parseInt(sys6)+parseInt(sys8))/2);
					dia6= ((parseInt(t15d6)+parseInt(t30d6))/2);
					dia8= ((parseInt(t15d8)+parseInt(t30d8))/2);
					diastole1= ((parseInt(dia6)+parseInt(dia8))/2);
					systole=parseInt(systole1);
					diastole=parseInt(diastole1);
					if(item.pulse==null){pul=0;}else{pul=item.pulse;}
					t15s6=null;
					t15s8=null;
					t30s6=null;
					t30s8=null;
					t15d6=null;
					t15d8=null;
					t30d6=null;
					t30d8=null;			
					tabler+='<tr><td id="taur_td">'+data[2]+'/'+data[1]+'</td><td id="taur_td">'+systole+'</td><td id="taur_td">'+diastole+'</td><td id="taur_td">'+pul+'</td></tr>';
					systole=null;
					dyastole=null;
				}
			  }
		   }
		}
     });
     tabler+='</tbody></table>';
	 
	 $("#grf_resultats").html(tabler);
	  
	 grph_res();
	 
	 reverseTableRows('taur'); //girem la taula
});

}


