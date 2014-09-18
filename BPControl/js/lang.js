//escullim  idioma  d'instal·lació

function inicilang(){	
	
	navigator.globalization.getPreferredLanguage(
		function(language){
			if(language.value=="ca" || language.value=="catala" || language.value=="cat"){
				//$('#langsel > option[value="1"]').attr('selected', 'selected');
				$('input:radio[name=langsel1]')[1].checked = true;
				localStorage.setItem('lang',1);
			}else if(language.value=='es' || language.value=='español'){
				//$('#langsel > option[value="2"]').attr('selected', 'selected');
				$('input:radio[name=langsel1]')[2].checked = true;
				localStorage.setItem('lang',2);
			}else{
				//$('#langsel > option[value="3"]').attr('selected', 'selected');
				$('input:radio[name=langsel1]')[3].checked = true;
				localStorage.setItem('lang',3);
			}
			selMain()
	});
	
}



// escull idioma al canviar
	
function selChange(){
	
		
	//var valor=parseInt($(document.getElementById('langsel')).val());
	var valor=parseInt($('input:radio[name=langsel]:checked').val());
	switch (valor)
		  {
		  case 0: 
			break;
		  case 1: 
		 	localStorage.setItem('lang',1);
			break;
		  case 2: 
		 	localStorage.setItem('lang',2);
			break;
		  case 3:
		  	localStorage.setItem('lang',3);
			break;
		  }

	selMain();
};

//DICCIONARI
	
function selMain(){
		var valor=parseInt(localStorage.getItem('lang'));
		
		switch (valor)
		  {
		  case 0: 
			break;
		  case 1: 
		 	$.i18n.load(i18n_dict_ca);
			break;
		  case 2: 
		 	$.i18n.load(i18n_dict_es);
			break;
		  case 3:
		  	$.i18n.load(i18n_dict_en);;
			break;
		  default:
		    $.i18n.load(i18n_dict_es);
			break;
		  }
		
		//start
		$('h5#zp_txt')._t('zp_txt');
		//navbar
		$('a#mp')._t('mp');
		$('a#ma')._t('ma');
		$('a#mg')._t('mg');
		$('a#mf')._t('mf');
		//navbar1
		$('a#mp1')._t('mp1');
		$('a#mg1')._t('mg1');
		$('a#mf1')._t('mf1');
		//centre sanitari
		$('p#header_centres')._t('header_centres');
		//demo
		$('p#header_demo')._t('header_demo');
		//demo
		$('p#header_demop')._t('header_demop');
		//contacte
		$('p#header_contacte')._t('header_contacte');
		//contacte pacient
		$('p#header_contactep')._t('header_contactep');
		//perfil
		$('p#header_perfil')._t('header_perfil');
		$('p#p7e')._t('p7e');
		$('p#gender_m')._t('gender_m');
		$('p#gender_f')._t('gender_f');
		//idioma
		$('p#header_idioma')._t('header_idioma');
		$('legend#idioma_label')._t('idioma_label');
		//mesures
		$('p#header_mesures')._t('header_mesures');	
		$('p#txt_form')._t('txt_form');
		$('p#psm')._t('psm');
        $('p#pdm')._t('pdm');
        $('p#pm')._t('pm');	
		$('p#btM')._t('btM');	
		$('p#btT')._t('btT');
		$('button#btS')._t('btS');
		$('p#popup')._t('popup');
		$('p#popup1')._t('popup1');
		//validació
		$('p#header_validacio')._t('header_validacio');	
		$('p#txt_form1')._t('txt_form1');
		$('button#btrS')._t('btrS');
		//grafiques
		$('p#header_graph_g')._t('header_graph_g'); 
		$('p#header_graph_m')._t('header_graph_m');
		$('p#header_graph_t')._t('header_graph_t');
		$('p#header_graph_l')._t('header_graph_l');
		$('div#grtxt')._t('grtxt');
		$('p#graf_ta_data')._t('graf_ta_data');
		$('p#graf_ta_si')._t('graf_ta_si');
		$('p#graf_ta_di')._t('graf_ta_di');
		$('p#graf_ta_p')._t('graf_ta_p');
		$('p#graf_pa')._t('graf_pa');	
		$('a#b_g1')._t('b_g1');
        $('a#b_g2')._t('b_g2');
        $('a#b_g3')._t('b_g3');
		//estat pacient
		$('p#header_estat')._t('header_estat'); 
		$('p#estat_data')._t('estat_data');
		$('p#estat_hora')._t('estat_hora');
		$('p#estat_estat')._t('estat_estat');
		$('p#estat_mesures')._t('estat_mesures');
		//notificacions
		$('p#noti_ti')._t('noti_ti');
		$('p#noti_mi')._t('noti_mi');
		//missatges
		$('p#header_comentaris')._t('header_comentaris');
		$('h#btn_xat_txt')._t('btn_xat_txt');
		//centre sanitari
		$('p#header_centre_sanitari')._t('header_centre_sanitari');
		//ajuda
		$('p#header_ajuda')._t('header_ajuda');
		$('a#ajuda_nav')._t('ajuda_nav');
		$('a#vids_l')._t('vids_l');
		//resultat
		$('p#header_resultats')._t('header_resultats');
		$('p#resultats')._t('resultats');
		$('p#valoracio')._t('valoracio');
		$('p#recordatori')._t('recordatori');
		$('p#result_ok')._t('result_ok');
		$('p#result_ko')._t('result_ko');
		$('p#result_idem')._t('result_idem');
		//AMPA
		$('p#header_ampa')._t('header_ampa');
		$('p#ampa_postura_h')._t('ampa_postura_h');
		$('p#ampa_postura')._t('ampa_postura');
		$('p#ampa_condicions_h')._t('ampa_condicions_h');
		$('p#ampa_condicions')._t('ampa_condicions');
		$('p#ampa_manegot_h')._t('ampa_manegot_h');
		$('p#ampa_manegot')._t('ampa_manegot');
		//ajuda navegacio
		$('p#header_ajuda_n')._t('header_ajuda_n');
		$('p#ajn_perfil_h')._t('ajn_perfil_h');
		$('p#ajn_perfil')._t('ajn_perfil');
		$('p#ajn_mesures_h')._t('ajn_mesures_h');
		$('p#ajn_mesures')._t('ajn_mesures');
		$('p#ajn_graf_h')._t('ajn_graf_h');
		$('p#ajn_graf')._t('ajn_graf');
		$('p#ajn_help_h')._t('ajn_help_h');
		$('p#ajn_help')._t('ajn_help');
		//telefon
		$('p#hetl1')._t('htel1');
		$('button#tele_btn')._t('tele_btn');
		$('p#tel_txt')._t('tel_txt');
		$('p#tag_dlang')._t('tag_dlang');
		//sms
		$('p#hsms')._t('hsms');
		$('div#smstxt')._t('smstxt');
		$('button#bSMS')._t('bSMS');
		$('p#licence_header')._t('licence_header');
		$('p#licence')._t('licence');
		//menu esquerra
		//$('button#me_nom')._t('me_nom');
      	$('button#me_perfil')._t('me_perfil');
       	$('button#me_sortir')._t('me_sortir');
       	$('button#me_pa')._t('me_pa');
    	$('button#me_entrar')._t('me_entrar');	
    	$('button#me_gp')._t('me_gp');
       	$('button#me_grafiques')._t('me_grafiques');	
    	$('button#me_hp')._t('me_hp');
        $('button#me_evolucio')._t('me_evolucio');  
    	$('button#me_m')._t('me_m');      
        $('button#me_missatges')._t('me_missatges');
        $('button#me_v')._t('me_v');      
        $('button#me_videos')._t('me_videos');
   		$('button#me_h')._t('me_h');
    	$('button#me_centres')._t('me_centres');
    	$('button#me_contacte')._t('me_contacte');	
    	$('button#me_info')._t('me_info');
		//menu formulari
		$('button#mf_p')._t('mf_p'); 
    	$('button#mf_esborrar')._t('mf_esborrar');
        $('button#mf_guardar')._t('mf_guardar');
        $('button#mf_carregar')._t('mf_carregar');
        $('button#mf_h')._t('mf_h');
        $('button#mf_ampa')._t('mf_ampa');
		//alerts
		$('p#al_mis')._t('al_mis');
		$('p#server_send_mis')._t('server_send_mis');
		$('p#server_send_mis1')._t('server_send_mis1');
		$('p#mf_esborrar_mis')._t('mf_esborrar_mis');
		$('p#mf_guardar_mis')._t('mf_guardar_mis');
		
  
	
	};
	
	
	/* DICCIONARI ANGLÈS */
	
	i18n_dict_en = {
		
		//start
		"zp_txt":"Patient area",
		//navbar
		"mp":"morning",
		"ma":"table",
		"mg":"global",
		"mf":"afternoon",
		//navbar1
		"mp1":"Health center",
		"mg1":"Contact",
		"mf1":"Info",
		//centre sanitari
		"header_centres":"HEALTH CENTERS",
		//demo
		"header_demo":"INFORMATION",
		//demo pacient
		"header_demop":"INFORMATION",
		//contacte
		"header_contacte":"CONTACT",
		//contacte pacient
		"header_contactep":"CONTACT",
		//perfil
		"header_perfil":"CONTROL PANEL",
		"p7e":"Control from",
		"gender_m":"Male",
		"gender_f":"Female",
		//idioma
		"header_idioma":"LANGUAGE",
		"idioma_label":"Select language",
		//mesures
		"header_mesures":"MESURES",
		"txt_form":"Please, enter your arterial pressures ...",
		"psm":"SYSTOLIC",
        "pdm":"DYASTOLIC",
        "pm":"PULSE",
		"btM":"MORNING (6-9 hours)",
		"btT":"AFTERNOON (18-21 hours)",
		"btS":"SEND",
		"popup":"Fill all the fields, please",
		"popup1":"Disable user. You can't send data",
		//validació
		"header_validacio":"VALIDATION",
		"txt_form1":"Do you want to send those presures?",
		"btrS":"SEND",
		//grafiques
		"header_graph_g":"GLOBAL",
		"header_graph_m":"MORNING",
		"header_graph_t":"AFTERNOON",
		"header_graph_l":"LIST",
		"grtxt":"",
		"graf_ta_data":"Date",
		"graf_ta_si":"Systolic",
		"graf_ta_di":"Dyastolic",
		"graf_ta_p":"Pulse",
		"graf_pa":"Aterial Pressure (mm Hg)",
		"b_g1":"1 month",
        "b_g2":"3 months",
        "b_g3":"6 months",
		//estat pacient
		"header_estat":"PATIENT EVOLUTION",
		"estat_data":"Date",
		"estat_hora":"Hour",
		"estat_estat":"State",
		"estat_mesures":"Mesures",
		//notificacions
		"noti_ti":"ENTER PRESSURES",
		"noti_mi":"Remember to send your blood presure",
		//missatges
		"header_comentaris":"MESSAGES",
		"btn_xat_txt":"SEND",
		//centre sanitari
		"header_centre_sanitari":"HEALTH CENTER",
		//ajuda
		"header_ajuda":"HELP",
		"ajuda_nav":"Utilization help",
		"vids_l":"VIDEOS",
		//resultats
		"header_resultats":"RESULTS",
		"resultats":"Your blood presures have been received OK",
		"valoracio":"...",
		"recordatori":"Remember to take your presure and send the controls",
		"result_ok":"Everything is okay.<br /> Remember to measure your blood pressures and to send the controls.",
		"result_ko":"We have seen your records,<br /> do not worry, we will advance your visit.",
		"result_idem":"Do not forget, no salt diet, remember to take medication and do physical activity.<br /> It is important.",
		//ampa
		"header_ampa":"A.M.P.A.",
		"ampa_postura_h":"Position:",
		"ampa_postura":"Sitting or lying with the arm which you should take the pressure at the height of your heart.Make yourself comfortable. Don't cross your legs.",
		"ampa_condicions_h":"Conditions:",
		"ampa_condicions":"Not have been taken coffee, alcohol, eating, smoking or exercise done an hour before taking the pressure. Do not take the pressure with the full bladder. Avoid noise and stressful situations. You must be at rest at least five minutes before the measurement.",
		"ampa_manegot_h":"Cuff:",
		"ampa_manegot":"We must get it 2-3 cm above the elbow flexure. Keep in mind the most appropriate cuff size according arm perimeter.",
		//ajuda navegacio
		"header_ajuda_n":"HELP",
		"ajn_perfil_h":"Profile",
		"ajn_perfil":"here you can find your personal data. If there are not correct, please contact with your doctor",
		"ajn_mesures_h":"Mesures",
		"ajn_mesures":"Clicking the spot a spinning wheel selector will be open to allow you to enter your blod presure mesures",
		"ajn_graf_h":"Graphics",
		"ajn_graf":"here you can find the evolution of your blod presure mesures",
		"ajn_help_h":"Help",
		"ajn_help":"Navigation and hipertension help ",
		//telefon
		"htel1":"REGISTER",
		"tele_btn":"Done",
		"tel_txt":"Please, confirm your country prefix and introduce your phone number",
		"tag_dlang":"Language",
		//sms
		"hsms":"AUTENTICATION ",
		"bSMS":"Enter",
		"smstxt":"Introduce the SMS code received",
		"licence_header":"LICENCE",
		"licence":"English Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
		//menu lateral esquerra
		//"me_nom":"Register",
      	"me_perfil":"Profile",
       	"me_sortir":"Exit",
       	"me_pa":"Arterial pressures",
    	"me_entrar":"Introduce pressures",
    	"me_gp":"Graphics",
       	"me_grafiques":"Pressure graphics",
    	"me_hp":"Patient history",
        "me_evolucio":"Patient evolution",
    	"me_m":"Messages",      
        "me_missatges":"My messages",
        "me_v":"Videos",  
        "me_videos":"Associated videos",
   		"me_h":"Help",
    	"me_centres":"Health center",
    	"me_contacte":"Contact",
    	"me_info":"Info",
		//menu formulari
		"mf_p":"Pressures",
    	"mf_esborrar":"Delete mesures",
        "mf_guardar":"Save mesures",
        "mf_carregar":"load mesures",
        "mf_h":"Help",
        "mf_ampa":"Advices",
		//alerts
		"al_mis":"Messages updated",
		"server_send_mis": "Data received ok" ,
		"server_send_mis1": "Your data can not be send. Do you want to retry?",
		"mf_esborrar_mis":"Do you want to delete all the values?",
		"mf_guardar_mis":"Your data have been saved",
		
		
	};
	
	/* DICCIONARI CASTELLÀ*/
	
	i18n_dict_es = {
		
		//start
		"zp_txt":"Area paciente",
		//navbar
		"mp":"mañana",
		"ma":"tabla",
		"mg":"global",
		"mf":"tarde",
		//navbar1
		"mp1":"Centro sanitario",
		"mg1":"Contacto",
		"mf1":"Info",
		//centre sanitari
		"header_centres":"CENTROS SANITARIOS",
		//demo
		"header_demo":"INFORMACION",
		//demo pacient
		"header_demop":"INFORMACION",
		//contacte
		"header_contacte":"CONTACTO",
		//contacte pacient
		"header_contactep":"CONTACTO",
		//perfil
		"header_perfil":"PANEL DE CONTROL",
		"p7e":"Seguimiento desde",
		"gender_m":"Masculino",
		"gender_f":"Femenino",
		//idioma
		"header_idioma":"IDIOMA",
		"idioma_label":"Esculli idioma",
		//mesures
		"header_mesures":"MEDIDAS",
		"txt_form":"Por favor, entre sus presiones arteriales ...",
		"psm":"SISTÓLICA",
        "pdm":"DIASTÓLICA",
        "pm":"PULSO",
		"btM":"MAÑANA (6-9 horas)",
		"btT":"TARDE (18-21 horas)",
		"btS":"ENVIAR",
		"popup":"Llene todos los campos porfavor",
		"popup1":"Usuario desactivado. No puede enviar datos",
		//validació
		"header_validacio":"VALIDACIÓN",
		"txt_form1":"¿Esta seguro que quiere enviar estas presiones arteriales?",
		"btrS":"ENVIAR",
		//grafiques
		"header_graph_g":"GLOBAL",
		"header_graph_m":"MAÑANA",
		"header_graph_t":"TARDE",
		"header_graph_l":"LISTA",
		"grtxt":"",
		"graf_ta_data":"Fecha",
		"graf_pa":"Presion arterial(mm Hg)",
		"graf_ta_si":"Sistólica",
		"graf_ta_di":"Diastólica",
		"graf_ta_p":"Pulso",
		"b_g1":"1 mes",
        "b_g2":"3 meses",
        "b_g3":"6 meses",
		//estat pacient
		"header_estat":"EVOLUCIÓN PACIENTE",
		"estat_data":"Fecha",
		"estat_hora":"Hora",
		"estat_estat":"Estado",
		"estat_mesures":"Medidas",
		//notificacions
		"noti_ti":"ENTRAR PRESIONES",
		"noti_mi":"Recuerde enviar sus presiones",
		//missatges
		"header_comentaris":"MENSAJES",
		"btn_xat_txt":"ENVIAR",
		//centre sanitari
		"header_centre_sanitari":"CENTROS SANITARIOS",
		//ajuda
		"header_ajuda":"AYUDA",
		"ajuda_nav":"Ayuda utilización",
		"vids_l":"VIDEOS",
		//resultats
		"header_resultats":"RESULTADOS",
		"resultats":"Sus presiones han sido recibidas correctamente",
		"valoracio":"...",
		"recordatori":"Recuerde tomarse la tensión y enviar los controles",
		"result_ok":"Todo va bien.<br /> Recuerde tomarse la tensión y enviar los controles.",
		"result_ko":"Hemos visto sus registros,<br /> no se preocupe le adelantaremos la visita.",
		"result_idem":"No lo olvide, dieta sin sal, tome la medicación y recuerde hacer actividad física.<br /> Es importante.",
		//ampa
		"header_ampa":"A.M.P.A.",
		"ampa_postura_h":"Postura:",
		"ampa_postura":"Sentado o tendido con el brazo donde se tiene que tomar la presión a la altura del corazon.<br />Adoptar una postura cómoda y relajada.<br />No cruzar las piernas.",
		"ampa_condicions_h":"Condiciones:",
		"ampa_condicions":"No haver tomado café, alcohol, comido, fumado o hecho ejercicio una hora antes de tomar la presión.<br />No tomar la presión con la bufeta llena.<br />Evitar ruidos y situaciones estresantes.<br />Debe estar en reposo al menos cinco minutos antes de la medida.",
		"ampa_manegot_h":"Manguito:",
		"ampa_manegot":"Debe ponerse 2-3 cm por encima del codo.<br />Debe tenerse en cuenta el tamanyo del manguito mas adiente segun el perímetro del brazo.",
		//ajuda navegacio
		"header_ajuda_n":"AYUDA",
		"ajn_perfil_h":"Perfil",
		"ajn_perfil":"aqui podrá encontrar sus datos personales. <br />En caso que no sean correctos, porfavor contacte con su medico",
		"ajn_mesures_h":"Medidas",
		"ajn_mesures":"Haciendo click en los cuadros aparecerà un selector que le permitirà entrar los valores de su presion arterial",
		"ajn_graf_h":"Graficos",
		"ajn_graf":"aqui encontrarà la evolucion de seus medidas de presion arterial",
		"ajn_help_h":"Ayuda",
		"ajn_help":"aqui encontrarà ayuda para la hipertension i para la aplicacion",
		//telefon
		"htel1":"REGISTRO",
		"tele_btn":"Hecho",
		"tel_txt":"Por favor, confirme el prefijo de su país y indroduzca su numero de teléfono",
		"tag_dlang":"Idioma",
		//sms
		"hsms":"AUTENTIFICACIÓN ",
		"bSMS":"Entrar",
		"smstxt":"Introduzca el codigo recibido por SMS",
		"licence_header":"LICÉNCIA",
		"licence":"Castellano Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
		//menu lateral esquerra
		//"me_nom":"Register",
      	"me_perfil":"Perfil",
       	"me_sortir":"Salir",
       	"me_pa":"Presiones arteriales",
    	"me_entrar":"Introducir presiones",
    	"me_gp":"Graficos",
       	"me_grafiques":"Grafica presiones",
    	"me_hp":"Historial paciente",
        "me_evolucio":"Evolución paciente",
    	"me_m":"Mensajes",      
        "me_missatges":"Mis mensajes",
        "me_v":"Videos",  
        "me_videos":"Videos asociados",
   		"me_h":"Ayuda",
    	"me_centres":"Centro sanitario",
    	"me_contacte":"Contacto",
    	"me_info":"Información",
		//menu formulari
		"mf_p":"Presiones",
    	"mf_esborrar":"Borrar medidas",
        "mf_guardar":"Guardar medidas",
        "mf_carregar":"Cargar medidas",
        "mf_h":"Ayuda",
        "mf_ampa":"Consejos",
		//alerts
		"al_mis":"Mensajes actualizados",
		"server_send_mis": "Sus presiones se han recibido correctamente" ,
		"server_send_mis1": "No se han podido enviar sus datos. Quiere reintentarlo?" ,
		"mf_esborrar_mis":"¿Seguro que quiere borrar todos los valores?",
		"mf_guardar_mis":"Sus datos se han guardado correctamente",
		
		 
	};
	
	
	/* DICCIONARI CATALÀ*/
	
	i18n_dict_ca = {
		
		//start
		"zp_txt":"Àrea pacient",
		//navbar
		"mp":"matí",
		"ma":"taula",
		"mg":"global",
		"mf":"tarda",
		//navbar1
		"mp1":"Centre sanitari",
		"mg1":"Contacte",
		"mf1":"Info",
		//centre sanitari
		"header_centres":"CENTRES SANITARIS",
		//demo
		"header_demo":"INFORMACIÓ",
		//demo pacient
		"header_demop":"INFORMACIÓ",
		//contacte
		"header_contacte":"CONTACTE",
		//contacte pacient
		"header_contactep":"CONTACTE",
		//perfil
		"header_perfil":"PANELL DE CONTROL",
		"p7e":"Seguiment desde",
		"gender_m":"Masculí",
		"gender_f":"Femení",
		//idioma
		"header_idioma":"IDIOMA",
		"idioma_label":"Escoja idioma",
		//mesures
		"header_mesures":"MESURES",
		"txt_form":"Si us plau, entri les seves pressions arterials...",
		"psm":"SISTÒLICA",
        "pdm":"DIASTÒLICA",
        "pm":"POLS",
		"btM":"MATI (6-9 hores)",
		"btT":"TARDA (18-21 hores)",
		"btS":"ENVIAR",
		"popup":"Ompliu tots els camps de pressió siusplau",
		"popup1":"Usuari desactivat. No pot enviar dades",
		//validació
		"header_validacio":"VALIDACIÓ",
		"txt_form1":"Està segur que vol enviar aquestes pressions arterials ?",
		"btrS":"ENVIAR",
		//grafiques
		"header_graph_g":"GLOBAL",
		"header_graph_m":"MATI",
		"header_graph_t":"TARDA",
		"header_graph_l":"LLISTA",
		"grtxt":"",
		"graf_ta_data":"Data",
		"graf_ta_si":"Sistòlica",
		"graf_ta_di":"Diastòlica",
		"graf_ta_p":"Pols",
		"graf_pa":"Pressió arterial(mm Hg)",
		"b_g1":"1 mes",
        "b_g2":"3 mesos",
        "b_g3":"6 mesos",
		//estat pacient
		"header_estat":"EVOLUCIÓ PACIENT",
		"estat_data":"Data",
		"estat_hora":"Hora",
		"estat_estat":"Estat",
		"estat_mesures":"Mesures",
		//notificacions
		"noti_ti":"ENTRAR PRESSIONS",
		"noti_mi":"Recordi enviar les seves pressions",
		//missatges
		"header_comentaris":"MISSATGES",
		"btn_xat_txt":"ENVIAR",
		//centre sanitari
		"header_centre_sanitari":"CENTRE SANITARI",
		//ajuda
		"header_ajuda":"AJUDA",
		"ajuda_nav":"Ajuda utilització",
		"vids_l":"VIDEOS",
		//resultats
		"header_resultats":"RESULTATS",
		"resultats":"Les seves pressions han estat rebudes correctament",
		"valoracio":"...",
		"recordatori":"Recordi pendre's la pressió i enviar els controls",
		"result_ok":"Tot va bé.<br /> Recordi mesurar-se la pressió i enviar els controls.",
		"result_ko":"Hem vist els seus registres.<br />No es preocupi li avançarem la visita.",
		"result_idem":"No ho oblidi, dieta sense sal, prengui la medicació i recordi fer activitat física.<br /> És important.",
		//ampa
		"header_ampa":"A.M.P.A.",
		"ampa_postura_h":"Postura:",
		"ampa_postura":"Assegut o estirat amb el braç on s'ha de prendre la pressió a l'altura del cor.<br />Adoptar una postura còmoda i relaxada.<br />No creuar les cames.",
		"ampa_condicions_h":"Condicions:",
		"ampa_condicions":"No haver pres cafè, alcohol, menjat, fumat o fet exercici una hora abans de prendre la pressió.<br />No prendre la pressió amb la bufeta plena.<br />Evitar sorolls i situacions estressants.<br />Cal estar en repòs al menys cinc minuts abans de la mesura.",
		"ampa_manegot_h":"Manegot:",
		"ampa_manegot":"Cal posar-lo 2-3 cm per sobre de la flexura del colze.<br />Cal tenir en compte el tamany de manegot més adient segons el permímetre del braç.",
		//ajuda navegacio
		"header_ajuda_n":"AJUDA",
		"ajn_perfil_h":"Perfil",
		"ajn_perfil":"En aquesta pestanya trobarà les seves dades personals.<br /> Pulsant sobre 'FOTO' podrà modificar-la.<br /> En cas que les dades no siguin correctes , siusplau contacti amb el seu metge.",
		"ajn_mesures_h":"Mesures",
		"ajn_mesures":"En aquesta pestanya és on introduirà les seves mesures de pressió arterial. <br />Premi els requadres i apareixerà un selector que li permetrà seleccionar els valors de pressió arterial.<br /> Un coop introduïdes totes les pressions podrà enviar les dades.<br />A la barra superior trobarà el boto 'info' que li donarà informació sobre com realitzar les mesures. ",
		"ajn_graf_h":"Gràfics",
		"ajn_graf":"En aquesta pestanya trobarà una gràfica amb l'evolució de les seves mesures de pressió arterial així com una taula amb tots els valors detallats.<br />Faci lliscar la pantalla per veure'n tot el contingut",
		"ajn_help_h":"Ajuda",
		"ajn_help":"En aquesta pestanya trobarà ajuda. <br /> Ajuda a la navegació per l'aplicació. <br /> Ajuda per a la presa de mesures. <br />Consells per a millorar la seva salut ",
		//telefon
		"htel1":"REGISTRE",
		"tele_btn":"Fet",
		"tel_txt":"Si us plau, confirma el prefix del teu país i introdueix el teu número de telèfon",
		"tag_dlang":"Idioma",
		//sms
		"hsms":"AUTENTICACIÓ ",
		"bSMS":"Entrar",
		"smstxt":"Introdueixi el codi rebut per SMS",
		"licence_header":"LLICÈNCIA",
		"licence":"Català Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
		//menu lateral esquerra
		//"me_nom":"Register",
      	"me_perfil":"Perfil",
       	"me_sortir":"Sortir",
       	"me_pa":"Pressions arterials",
    	"me_entrar":"Introduir pressions",
    	"me_gp":"Gràfiques",
       	"me_grafiques":"Gràfica pressions",
    	"me_hp":"Historial pacient",
        "me_evolucio":"Evolució pacient",
    	"me_m":"Missatges",      
        "me_missatges":"Els meus missatges",
        "me_v":"Vídeos",  
        "me_videos":"Vídeos associats",
   		"me_h":"Ajuda",
    	"me_centres":"Centre sanitari",
    	"me_contacte":"Contacte",
    	"me_info":"Informació",
		//menu formulari
		"mf_p":"Pressions",
    	"mf_esborrar":"Esborrar mesures",
        "mf_guardar":"Guardar mesures",
        "mf_carregar":"Carregar mesures",
        "mf_h":"Ajuda",
        "mf_ampa":"Consells",
		//alerts
		"al_mis":"Missatges actualizats",
		"server_send_mis": "Hem rebut les seves pressions correctament" ,
		"server_send_mis1": "No s´han pogut enviar les dades. Ho vol reintentar?" ,
		"mf_esborrar_mis":"Segur que que vol esborrar tots els valors?",
		"mf_guardar_mis":"Les seves dades s'han guardat correctament",
		
			
			
	};
	
	
	
	
	
	
	
	
	
	

