//INICIALITZACIO

//control back button android
	document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#perfil')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        e.preventDefault();
    }
}, false);

// event deviceready 
document.addEventListener("deviceready", inici, false);
function inici() { 
	
	
	 	
	//eliminar 300ms wait
	$(function() {
	 	new FastClick(document.body);
	});
	
 	//splash screen
	setTimeout(function(){navigator.splashscreen.hide();}, 20000);
	
	//COMPROVACIO TOKEN 
	var ltoken = localStorage.getItem('token') || '<empty>'; 
	
	if(ltoken=='<empty>' || null){
		crg(); //efecte loading
		inicilang(); // establim idioma telèfon	
		server_centres_all(); //carreguem centres sanitaris
		server_admin();
		//Slideshow
		$("#slideshow > div:gt(0)").hide();
		setInterval(function() { 
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		},  3000);
		
		window.setInterval(function(){
  		server_centres_all();
		server_admin();
		}, 500000); //consultem canvis cada 5 minuts	
		
		setTimeout(function(){$.mobile.changePage("#start");}, 100);
		setTimeout(function(){crgoff();}, 10000); //fi efecte loading
		
	}else{
		crg();  //efecte loading
		selMain();  // carreguem idioma
		server_pacient(ltoken);  // carreguem dades pacient
		server_admin_p();
		server_missatges(); //carreguem xat
		estat();	//carreguem estats
		server_graph_taula();  //carreguem dades gràfiques
		//server_graph_res();
		p61(); //establim grafiques
		p71();
		p81();
		p93();
		vid();//carreguem videos
    	
		window.setInterval(function(){
  		server_missatges();
		}, 100000); //consultem xat cada minut		
		
		setTimeout(function(){$.mobile.changePage("#perfil");}, 100);
		setTimeout(function(){crgoff();}, 20000); //fi efecte loading
	}	   
}; //  /inici

//efecte loading 

function crg() { $("body").addClass("loading"); }
function crgoff() { $("body").removeClass("loading"); }  


// ENTRADA AREA PRIVADA

function private(){
	crg();  //efecte loading
	$.mobile.changePage("#telefon");
	setTimeout(function(){crgoff();}, 1000);
	
	}



// FORMULARI 

function sendV(){ //obrir pàgina de validació
	
	if(document.getElementById('notificacions').value ==0){
		navigator.notification.alert(
                    document.getElementById('popup1').innerHTML,
                    null,
                    'BPControl',
                    'Acceptar'
                );
	 }else if((document.getElementById('pd1m').value == null || document.getElementById('pd1m').value == '') ||(document.getElementById('pd2m').value == null || document.getElementById('pd2m').value == '')||(document.getElementById('pd3m').value == null || document.getElementById('pd3m').value == '')||(document.getElementById('pd1t').value == null || document.getElementById('pd1t').value == '')||(document.getElementById('pd2t').value == null || document.getElementById('pd2t').value == '')||(document.getElementById('pd3t').value == null || document.getElementById('pd3t').value == '')){ 
	navigator.notification.alert(
                    document.getElementById('popup').innerHTML,
                    null,
                    'BPControl',
                    'Acceptar'
                );
	 }
	else{ 
	
	document.getElementById('pst1m').value=document.getElementById('ps1m').value;
	document.getElementById('pdt1m').value=document.getElementById('pd1m').value;
	document.getElementById('pt1m').value=document.getElementById('p1m').value;
	document.getElementById('pst2m').value=document.getElementById('ps2m').value;
	document.getElementById('pdt2m').value=document.getElementById('pd2m').value;
	document.getElementById('pt2m').value=document.getElementById('p2m').value;
	document.getElementById('pst3m').value=document.getElementById('ps3m').value;
	document.getElementById('pdt3m').value=document.getElementById('pd3m').value;
	document.getElementById('pt3m').value=document.getElementById('p3m').value;
	
	document.getElementById('pst1t').value=document.getElementById('ps1t').value;
	document.getElementById('pdt1t').value=document.getElementById('pd1t').value;
	document.getElementById('pt1t').value=document.getElementById('p1t').value;
	document.getElementById('pst2t').value=document.getElementById('ps2t').value;
	document.getElementById('pdt2t').value=document.getElementById('pd2t').value;
	document.getElementById('pt2t').value=document.getElementById('p2t').value;
	document.getElementById('pst3t').value=document.getElementById('ps3t').value;
	document.getElementById('pdt3t').value=document.getElementById('pd3t').value;
	document.getElementById('pt3t').value=document.getElementById('p3t').value;
	$.mobile.changePage('#formVal');
	
	}
	
};  //  /obrir pag validació


function my_alert(){  //funcio esborrar panell lateral formulari
	
	 navigator.notification.confirm(
                    document.getElementById('mf_esborrar_mis').innerHTML,
                    cancel_con,
                    'BPControl',
                    'No,Yes'
                );
	
};	

function cancel_con(confirmar){ // funcio esborrar
	if(confirmar==1){}
	else{cancelV();}
	}

function cancelV(){ //esborrar valors del formulari
	
	$(document.getElementById('ps1m').value= null);
	$(document.getElementById('pd1m').value= null);
	$(document.getElementById('p1m').value= null);
	$(document.getElementById('ps2m').value= null);
	$(document.getElementById('pd2m').value= null);
	$(document.getElementById('p2m').value= null);
	$(document.getElementById('ps3m').value= null);
	$(document.getElementById('pd3m').value= null);
	$(document.getElementById('p3m').value= null);
	
	$(document.getElementById('ps1t').value= null);
	$(document.getElementById('pd1t').value= null);
	$(document.getElementById('p1t').value= null);
	$(document.getElementById('ps2t').value= null);
	$(document.getElementById('pd2t').value= null);
	$(document.getElementById('p2t').value= null);
	$(document.getElementById('ps3t').value= null);
	$(document.getElementById('pd3t').value= null);
	$(document.getElementById('p3t').value= null);
	
	
};

function save_form(){ //guardar valors del formulari

	localStorage.setItem("ps1m",document.getElementById('ps1m').value);
	localStorage.setItem("pd1m",document.getElementById('pd1m').value);
	localStorage.setItem("p1m",document.getElementById('p1m').value);
	localStorage.setItem("ps2m",document.getElementById('ps2m').value);
	localStorage.setItem("pd2m",document.getElementById('pd2m').value);
	localStorage.setItem("p2m",document.getElementById('p2m').value);
	localStorage.setItem("ps3m",document.getElementById('ps3m').value);
	localStorage.setItem("pd3m",document.getElementById('pd3m').value);
	localStorage.setItem("p3m",document.getElementById('p3m').value);

	localStorage.setItem("ps1t",document.getElementById('ps1t').value);
	localStorage.setItem("pd1t",document.getElementById('pd1t').value);
	localStorage.setItem("p1t",document.getElementById('p1t').value);
	localStorage.setItem("ps2t",document.getElementById('ps2t').value);
	localStorage.setItem("pd2t",document.getElementById('pd2t').value);
	localStorage.setItem("p2t",document.getElementById('p2t').value);
	localStorage.setItem("ps3t",document.getElementById('ps3t').value);
	localStorage.setItem("pd3t",document.getElementById('pd3t').value);
	localStorage.setItem("p3t",document.getElementById('p3t').value);
	navigator.notification.alert(
                   document.getElementById('mf_guardar_mis').innerHTML,
                    null,
                    'BPControl',
                    'Acceptar'
                );
};


function load_form(){ //carergar valors del formulari

	(document.getElementById('ps1m').value) = localStorage.getItem('ps1m') || '<empty>';
	(document.getElementById('pd1m').value) = localStorage.getItem('pd1m') || '<empty>';
	(document.getElementById('p1m').value) = localStorage.getItem('p1m') || '<empty>';
	(document.getElementById('ps2m').value) = localStorage.getItem('ps2m') || '<empty>';
	(document.getElementById('pd2m').value) = localStorage.getItem( 'pd2m') || '<empty>';
	(document.getElementById('p2m').value) = localStorage.getItem( 'p2m') || '<empty>';
	(document.getElementById('ps3m').value) = localStorage.getItem('ps3m') || '<empty>';
	(document.getElementById('pd3m').value) = localStorage.getItem('pd3m') || '<empty>';
	(document.getElementById('p3m').value) = localStorage.getItem( 'p3m') || '<empty>';

	(document.getElementById('ps1t').value) = localStorage.getItem( 'ps1t') || '<empty>';
	(document.getElementById('pd1t').value) = localStorage.getItem( 'pd1t') || '<empty>';
	(document.getElementById('p1t').value) = localStorage.getItem( 'p1t') || '<empty>';
	(document.getElementById('ps2t').value) = localStorage.getItem( 'ps2t') || '<empty>';
	(document.getElementById('pd2t').value) = localStorage.getItem( 'pd2t') || '<empty>';
	(document.getElementById('p2t').value) = localStorage.getItem( 'p2t') || '<empty>';
	(document.getElementById('ps3t').value) = localStorage.getItem('ps3t') || '<empty>';
	(document.getElementById('pd3t').value) = localStorage.getItem( 'pd3t') || '<empty>';
	(document.getElementById('p3t').value) = localStorage.getItem( 'p3t') || '<empty>';
};


// VALIDACIO 

function ok(patient_stat){
	crg(); //carreguem efecte loading
	var element = document.getElementById('valoracio');
	if(patient_stat==1){
	$(document.getElementById('sem_rd')).show();
	$(document.getElementById('sem_gr')).hide();
	$(document.getElementById('sem_yw')).hide();
	element.style.background='#F66';
	element.innerHTML = document.getElementById('result_ko').innerHTML;
	}else if(patient_stat==0){
	$(document.getElementById('sem_gr')).show();
	$(document.getElementById('sem_rd')).hide();
	$(document.getElementById('sem_yw')).hide();
	element.style.background='#AFA';
	element.innerHTML = document.getElementById('result_ok').innerHTML;
	}else{
	$(document.getElementById('sem_yw')).show();
	$(document.getElementById('sem_rd')).hide();
	$(document.getElementById('sem_gr')).hide();
	element.style.background='#FF9';
	element.innerHTML = document.getElementById('result_idem').innerHTML;	
	}
	cancelV(); //esborra formulari
	$.mobile.changePage('#resultat');
	setTimeout(function(){crgoff();}, 10000); //fi efecte loading);
	window.plugin.notification.badge.clear(); //elimina badge notification en enviar
};
function no(){
	$.mobile.changePage('#formulari');
};

function sel_sw(p){
	document.getElementById('popup').value=p;
	};


// SPINNING WHEEL

function openPresio() {
	off(); //deshabilitar textbox
	setTimeout(function(){
		var sistolica = { };
		var diastolica = { };
		var pols = { };
		for( var i = 50; i < 250; i += 1 ) {
			sistolica[i] = i;
		}
		for( var i = 30; i < 130; i += 1 ) {
			diastolica[i] = i;
		}
		for( var i = 10; i < 200; i += 1 ) {
			pols[i] = i;
		}
		SpinningWheel.addSlot(sistolica, 'center', 130); //pas
		SpinningWheel.addSlot(diastolica, 'center', 80); //pad
		SpinningWheel.addSlot(pols, 'center', 75); //pols
		SpinningWheel.setCancelAction(cancel);
		SpinningWheel.setDoneAction(done);	
		SpinningWheel.open();		
	}, 100);	
}

function done() {
	var results = SpinningWheel.getSelectedValues();
	var posu=document.getElementById('popup').value;
	switch (posu)
		  {
		  case 1: 
		  	document.getElementById('ps1m').value = results.sist;
			document.getElementById('pd1m').value = results.dist ;
			document.getElementById('p1m').value = results.pols ;
			break;
		  case 2: 
			document.getElementById('ps2m').value = results.sist.join(' ') ;
			document.getElementById('pd2m').value = results.dist.join(' ') ;
			document.getElementById('p2m').value = results.pols.join(' ') ;
			break;
		  case 3: 
			document.getElementById('ps3m').value = results.sist.join(' ') ;
			document.getElementById('pd3m').value = results.dist.join(' ') ;
			document.getElementById('p3m').value = results.pols.join(' ') ;
			break;
		  case 4: 
		  	document.getElementById('ps1t').value = results.sist.join(' ') ;
			document.getElementById('pd1t').value = results.dist.join(' ') ;
			document.getElementById('p1t').value = results.pols.join(' ') ;
			break;
		  case 5:
		  	document.getElementById('ps2t').value = results.sist.join(' ') ;
			document.getElementById('pd2t').value = results.dist.join(' ') ; 
			document.getElementById('p2t').value = results.pols.join(' ') ; 
			break;
		  case 6: 
		  	document.getElementById('ps3t').value = results.sist.join(' ') ;
			document.getElementById('pd3t').value = results.dist.join(' ') ;
			document.getElementById('p3t').value = results.pols.join(' ') ;
			break;
	}
   on(); //habilitar textbox
}

function cancel() {
	on(); //habilitar textbox
	return false;
}

//habilitar textbox

function on(){
	document.getElementById('ps1m').disabled=false;
	document.getElementById('pd1m').disabled=false;
	document.getElementById('p1m').disabled=false;
	document.getElementById('ps2m').disabled=false;
	document.getElementById('pd2m').disabled=false;
	document.getElementById('p2m').disabled=false;
	document.getElementById('ps3m').disabled=false;
	document.getElementById('pd3m').disabled=false;
	document.getElementById('p3m').disabled=false;
	document.getElementById('ps1t').disabled=false;
	document.getElementById('pd1t').disabled=false;
	document.getElementById('p1t').disabled=false;
	document.getElementById('ps2t').disabled=false;
	document.getElementById('pd2t').disabled=false;
	document.getElementById('p2t').disabled=false;
	document.getElementById('ps3t').disabled=false;
	document.getElementById('pd3t').disabled=false;
	document.getElementById('p3t').disabled=false;
	document.getElementById('btM').disabled=false;
	document.getElementById('btT').disabled=false;
	document.getElementById('btS').disabled=false;	
	};
	
//deshabilitar textbox

function off(){
	
	document.getElementById('ps1m').disabled=true;
	document.getElementById('pd1m').disabled=true;
	document.getElementById('p1m').disabled=true;
	document.getElementById('ps2m').disabled=true;
	document.getElementById('pd2m').disabled=true;
	document.getElementById('p2m').disabled=true;
	document.getElementById('ps3m').disabled=true;
	document.getElementById('pd3m').disabled=true;
	document.getElementById('p3m').disabled=true;
	document.getElementById('ps1t').disabled=true;
	document.getElementById('pd1t').disabled=true;
	document.getElementById('p1t').disabled=true;
	document.getElementById('ps2t').disabled=true;
	document.getElementById('pd2t').disabled=true;
	document.getElementById('p2t').disabled=true;
	document.getElementById('ps3t').disabled=true;
	document.getElementById('pd3t').disabled=true;
	document.getElementById('p3t').disabled=true;
	document.getElementById('btM').disabled=true;
	document.getElementById('btT').disabled=true;
	document.getElementById('btS').disabled=true;
	};

//   /spining wheel

window.addEventListener('load', function(){ setTimeout(function(){ window.scrollTo(0,0); }, 100); }, true);

//tancar app

function tanca(){
	navigator.app.exitApp();
	}

//esborrar locals

function locals(){localStorage.clear();}

//endarrera

function goBack() {
    window.history.back()
}

//ajuda navegacio

function x1(){
	document.getElementById('ajn_perfil_h').hidden=false;
	document.getElementById('ajn_perfil').hidden=false;
	document.getElementById('ajn_mesures_h').hidden=true;
	document.getElementById('ajn_mesures').hidden=true;
	document.getElementById('ajn_graf_h').hidden=true;
	document.getElementById('ajn_graf').hidden=true;
	document.getElementById('ajn_help_h').hidden=true;
	document.getElementById('ajn_help').hidden=true;
	}
	
function x2(){
	document.getElementById('ajn_perfil_h').hidden=true;
	document.getElementById('ajn_perfil').hidden=true;
	document.getElementById('ajn_mesures_h').hidden=false;
	document.getElementById('ajn_mesures').hidden=false;
	document.getElementById('ajn_graf_h').hidden=true;
	document.getElementById('ajn_graf').hidden=true;
	document.getElementById('ajn_help_h').hidden=true;
	document.getElementById('ajn_help').hidden=true;
	}
	
function x3(){
	document.getElementById('ajn_perfil_h').hidden=true;
	document.getElementById('ajn_perfil').hidden=true;
	document.getElementById('ajn_mesures_h').hidden=true;
	document.getElementById('ajn_mesures').hidden=true;
	document.getElementById('ajn_graf_h').hidden=false;
	document.getElementById('ajn_graf').hidden=false;
	document.getElementById('ajn_help_h').hidden=true;
	document.getElementById('ajn_help').hidden=true;
	}
	
function x4(){
	document.getElementById('ajn_perfil_h').hidden=true;
	document.getElementById('ajn_perfil').hidden=true;
	document.getElementById('ajn_mesures_h').hidden=true;
	document.getElementById('ajn_mesures').hidden=true;
	document.getElementById('ajn_graf_h').hidden=true;
	document.getElementById('ajn_graf').hidden=true;
	document.getElementById('ajn_help_h').hidden=false;
	document.getElementById('ajn_help').hidden=false;
	}
	
	
function pin(){
		if(document.getElementById('licence').value =='no'){
			navigator.notification.alert(
                   document.getElementById('mis_licence').innerHTML,
                    null,
                    'BPControl',
                    'Acceptar'
                );
			}
		else{
				sms();
			}
	}	
	

// MENU LATERAL PERFIL
	
function panel_perfil(){
	
	if ( document.getElementById('panel_perfil').hidden==false){
   		$("#panel_perfil").animate({right:"-200px"});
		$("#perfil").animate({left:"0"});	
		setTimeout(function(){document.getElementById('panel_perfil').hidden=true;}, 200);
  	}else{  
		document.getElementById('panel_perfil').hidden=false;
  		$("#panel_perfil").animate({right:"0"});
		$("#perfil").animate({left:"-200px"});	
 	}
}

// MENU LATERAL FORMULARI
	
function panel_form(){
	
	if ( document.getElementById('panel_form').hidden==false){
   		$("#panel_form").animate({right:"-200px"});
		$("#formulari").animate({left:"0"});	
		setTimeout(function(){document.getElementById('panel_form').hidden=true;}, 200);
  	}else{  
		document.getElementById('panel_form').hidden=false;
  		$("#panel_form").animate({right:"0"});
		$("#formulari").animate({left:"-200px"});	
 	}
}

	
// MENU LATERAL ESQUERRA
	
function panel(){	
	if ( document.getElementById('panel').hidden==false){
   		$("#panel").animate({left:"-200px"});
		$.mobile.activePage.animate({left:"0"});	
		setTimeout(function(){document.getElementById('panel').hidden=true;}, 200);
  	}else{  
		document.getElementById('panel').hidden=false;
  		$("#panel").animate({left:"0"});
		$.mobile.activePage.animate({left:"+200px"});	
 	}
}

function p1(){
	panel();
	$.mobile.changePage('#perfil');
	}
	
function p2(){
	panel();
	$.mobile.changePage('#formulari');
	}

function p3(){
	panel();
	$.mobile.changePage('#centre_sanitari');
	}
	
function p4(){
	panel();
	$.mobile.changePage('#comentaris');
	}
	
function p5(){
	panel();
	$.mobile.changePage('#grafiques');
	}
	
function p6(){
	panel();
	$.mobile.changePage('#videos');
	}
	
function p7(){
	panel();
	$.mobile.changePage('#estat_pacient');
	}
	
function p8(){
	panel();
	$.mobile.changePage('#contactep');
	}
	
function p9(){
	panel();
	$.mobile.changePage('#demo1');//demop
	}
	
function p10(){
	panel();
	$.mobile.changePage('#idioma');
	}
function p11(){
	panel();
	tanca();
	}
	
//formulari

function p21(){
	panel_form();
	$.mobile.changePage('#ampa');
	}

//demo

function p111(){
	var ltoken = localStorage.getItem('token') || '<empty>'; 
	if(ltoken=='<empty>' || null){	   		
			$.mobile.changePage("#start");
	}else {
			 $.mobile.changePage("#perfil");
		}
}
	


//grafica global

function p61(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef').value= data;	
	//date=(5).days().ago().toString("yyyy-MM-dd");
	date=(1).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei').value=date;
	server_graph_all();
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
	
	
function p62(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef').value= data;
	date=(3).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei').value=date;
	server_graph_all();	
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
	
function p63(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef').value= data;
	date=(6).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei').value=date;
	server_graph_all();	
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	


//grafica mati

function p71(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_m').value= data;
	//date=(5).days().ago().toString("yyyy-MM-dd");
	date=(1).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_m').value=date;
	server_graph_m();
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);	
	}
	
function p72(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_m').value= data;
	date=(3).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_m').value=date;
	server_graph_m();
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
	
function p73(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_m').value= data;
	date=(6).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_m').value=date;
	server_graph_m();
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}

//grafica tarda
	
function p81(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_t').value= data;
	//date=(5).days().ago().toString("yyyy-MM-dd");
	date=(1).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_t').value=date;
	server_graph_t();
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
function p82(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_t').value= data;
	date=(3).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_t').value=date;
	server_graph_t();	
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
	
function p83(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_t').value= data;
	date=(6).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_t').value=date;
	server_graph_t();	
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}

//taula
	
function p91(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_tau').value= data;
	date=(1).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_tau').value=date;
	server_graph_taula();
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
function p92(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_tau').value= data;
	date=(3).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_tau').value=date;
	server_graph_taula();	
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}
	
	
function p93(){
	$('body').addClass("loading"); 
	data=Date.today().toString("yyyy-MM-dd");
	document.getElementById('datef_tau').value= data;
	date=(6).months().ago().toString("yyyy-MM-dd");
	document.getElementById('datei_tau').value=date;
	server_graph_taula();	
	setTimeout(function(){ $('body').removeClass("loading"); } , 7000);
	}

//actualització missatges

function al1(){
	 navigator.notification.alert(
				document.getElementById('al_mis').innerHTML,
				null,
				'BPControl',
				'OK'
				)
	}
	
//efecte css teclat xat

function mis_css(){
	$("#comentaris").animate({top:"-260px"});
}
 function mis_css1(){
	 $("#comentaris").animate({top:"0"});
}

//videos

function vid(){
	var div='';
	var count = localStorage.getItem('count') || 0;
	var i=1, a=0;
	for(i=1; i<=count; i++){
		var videos = localStorage.getItem('videos'+i);
		div +='<li><iframe  class="zoom" src="http://www.youtube.com/embed/'+videos+'" frameborder="0" allowfullscreen></iframe></li> '	
	}	
	$("#video_list").html(div);								
}