//escullim  idioma  d'instal·lació

function inicilang(){	
	
	navigator.globalization.getPreferredLanguage(
		function(language){
			if(language.value=="ca" || language.value=="catala" || language.value=="cat" ||  language.value=="catalan"){
				localStorage.setItem('lang',1);
			}else if(language.value=='es' || language.value=='español' || language.value=='esp'  || language.value=='spanish'){
				localStorage.setItem('lang',2);
			}else if(language.value=='en' || language.value=='english' || language.value=='eng'){
				localStorage.setItem('lang',3);
			}else{	
				localStorage.setItem('lang',2);
			}
			selMain()
	});
	
}



// escull idioma al canviar
	
function selChange(){
	crg(); //efecte loading
	var valor=parseInt($('input:radio[name=langsel1]:checked').val());
	
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
	location.reload();
	
};

//DICCIONARI
	
function selMain(){
		var val=parseInt(localStorage.getItem('lang'));
		switch (val)
		  {
		  case 0: 
			break;
		  case 1: 
		    $("#rc1").attr('checked', 'checked');
		 	$.i18n.load(i18n_dict_ca);
			break;
		  case 2: 
		  	$("#rc2").attr('checked', 'checked');
		 	$.i18n.load(i18n_dict_es);
			break;
		  case 3:
			$("#rc3").attr('checked', 'checked');
		  	$.i18n.load(i18n_dict_en);
			break;
		  default:
		    $("#rc2").attr('checked', 'checked');
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
		//demo pacient
		$('p#header_demop')._t('header_demop');
		$('p#1')._t('1');
		$('p#2')._t('2');
		$('p#3')._t('3');
		$('p#4')._t('4');
		$('p#5')._t('5');
		$('p#6')._t('6');
		$('p#7')._t('7');
		$('p#8')._t('8');
		$('p#9')._t('9');
		$('p#10')._t('10');
		$('p#11')._t('11');
		$('p#12')._t('12');
		$('p#13')._t('13');
		$('p#14')._t('14');
		$('p#15')._t('15');
		$('p#16')._t('16');
		$('p#17')._t('17');
		$('p#18')._t('18');
		$('p#19')._t('19');
		$('p#20')._t('20');
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
		$('p#idioma_label')._t('idioma_label');
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
		$('button#btrSS')._t('btrSS');
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
		$('button#me_idioma')._t('me_idioma');
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
		$('p#mis_licence')._t('mis_licence');
		
  		
	
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
		"mp1":"Centers",
		"mg1":"Contact",
		"mf1":"Info",
		//centre sanitari
		"header_centres":"HEALTH CENTERS",
		//demo
		"header_demo":"INFORMATION",
		//demo pacient
		"header_demop":"INFORMATION",
		"1":"This screen is accessible for a non registered users.<br /> In the bottom we can find three links with information about the application [2], the health centers where currently you can sign in the program and contact information,  all of them reachable without beeing registered in the app.<br />In the top we can find acces to the patients private area [1] where, you can register in the app if the doctor allows you.<br />The next app open skip's that part and jump directly to the patient area.",
		"2":"These screens have information about the app, the health centers [2] and the data contact. Any user who download the app have acces to them . Whit the button on top [1] we come back to the previous screen",
		"3":"The users must register in the app providing the country code [1] and the phone number [2]. If the introduced phone is inthe hospital database the system will send an SMS with a code [3].",
		"4":"If we already registered, the system will send an SMS. We have to introduce the code in this spot [1]. We must accept the licence agreement [3] to reach the patient area [2].",
		"5":"Here we can find our personal data and data of the patient's health center [2].<br /> In the top of the screen we have acces to the main menú [1].",
		"6":"Opening the main menú we have acces to all the app tools. Patient profile [1]. App language [2]. Exit app [3]. Introduce blood pressure [4]. Charts [5]. Clinical history [6]. Doctor's chat [7]. Doctor's vídeos [8]. Help and information [9].",
		"7":"This tool allows us to change the language of the app.",
		"8":"In this screen we introduce our blood pressures (systolic [3], diastolic [4] and pulse [5]) wich will be send to the doctor. We have acces to the menu[1] and other specific tools [2].<br />Touching any of the three input fields a selector shows up and we can select our blood tension and pulse.",
		"9":"Scrolling up and down (systolic [4], diastolic [5] and pulse [6]) we can select the desired pressure and pulsep [3] and save them  [2] or cancel the selection [1].",
		"10":"You must fill all the pressures before send them.",
		"11":"In the left menú [1] you can find the tools to save [3], erase [2] or load [4] the blood pressures.<br />And a screen with some tips about how to make your measures [5].",
		"12":"In this screen we can read some basical tips on how to made the blood pressure measures correctly [2] and get back to the previous screen [1].",
		"13":"Once all the pressures are filled you can send them [1], after confirm that they are all correct.",
		"14":"The results screen shows us our heath with a status indicator [1] and a little description [2].<br />You also can find a video [3] send by the doctor with some advices abaut the control of the desease. You can find those videos and the clinical history in the menú.",
		"15":"Clinical history",
		"16":"Doctors vídeos",
		"17":"In the charts seccion you can find diferent presentations of your measeures in the bottom menu [3].<br />In all the screens you can select the chart range date by   1, 3 and 6 months button [1] or with the date buttons [2].",
		"18":"presures list.",
		"19":"Pressing the input field in the bottom [5] a keyboard shows up to allow you to write a message to your doctor [3], send it [6] and wait for the doctor's answer [4]. You have acces to the main menu [1] and an addicional button to uptate the records [2].",
		"20":"My problems",
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
		"btrSS":"SEND",
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
		//resultats
		"header_resultats":"RESULTS",
		"resultats":"Your blood presures have been received OK",
		"valoracio":"...",
		"recordatori":"Remember to take your presure and send the controls",
		"result_ok":"Everything is okay.<br /> Remember to measure your blood pressures and send the controls.",
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
		"licence":"English El usuario ha de cumplimentar adecuadamente el formulario de registro para gozar de los beneficios de ser usuario registrado.<br /> Al instalarse este programa el usuario acepta formar parte del seguimiento continuo de su estado mediante centro sanitario y usuario. El usuario acepta y reconoce que la acceptación de la licencia  tiene los mismos efectos que un contrato por escrito, negociado y firmado por usted. Si usted no está de acuerdo, no utilice este programa.",
		//menu lateral esquerra
		//"me_nom":"Register",
      	"me_perfil":"Profile",
		"me_idioma":"Language",
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
        "mf_carregar":"Load mesures",
        "mf_h":"Help",
        "mf_ampa":"Advices",
		//alerts
		"al_mis":"Messages updated",
		"server_send_mis": "Data received ok" ,
		"server_send_mis1": "Your data can not be send. Do you want to retry?",
		"mf_esborrar_mis":"Do you want to delete all the values?",
		"mf_guardar_mis":"Your data have been saved",
		"mis_licence":"You must accept the licence agreement",
		
		 
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
		"mp1":"Centros",
		"mg1":"Contacto",
		"mf1":"Info",
		//centre sanitari
		"header_centres":"CENTROS SANITARIOS",
		//demo
		"header_demo":"INFORMACIÓN",
		//demo pacient
		"header_demop":"INFORMACIÓN",
		"1":" Esta pantalla és accesible para pacientes no registrados.<br />En la parte inferior podemos encontrar enlaces con información sobre la aplicación [2], los centros donde actualmente se pueden apuntar al programa y la información e contacto, todos accesibles sin estar registrado en la aplicación.<br />En la aprte superior está el acceso al área privada de los pacientes [1] que, si previamente han sido dados de alta en el servidor por su medico, se podran registrar en la aplilcación  con su número de teléfono.<br />Cuando el usuario està registrado la aplicación salta esta pantalla de presentación y accede directamente al área de paciente.",
		"2":"Estas són tres pantallas con información sobre la aplicación, los centros sanitarios colaboradores [2] y los datos de contacto, a los que tendrá acceso cualquier usuario no registrado que se descargue la aplicació. Con el botón superior [1] volvemos a la pantalla inicial",
		"3":"Los usuarios tienen que registrarse en la aplicación proporcionando el codigo de pais [1] i el número de teléfon [2], el qual se contrastará con la base de datos del hospital, si el teléfono introducido es correcto se enviará un SMS con un codigo al paciente para validar que és el propietario del telefono introducido [3].",
		"4":"Si estamos registrados, el sistema nos enviará un SMS que tendremos que introducir en este punto [1]. Si la autenticación és valida, después de aceptar el acuerdo de licencia [3] accedemos al área de paciente [2].",
		"5":"Aquí podemos encontrar nuestros datos personales y los del hospital donde se realiza el seguimiento de la salud del paciente [2].<br />Si algun dato és incorrecto, porfavor pongase en contacto con su médico. En la parte superior disponemos de un acceso al menú [1].",
		"6":"Desplegando el menú lateral tendremos acceso a todas las heraramientas que nos ofrece la aplicación. Datos del usuario [1]. Idioma de la palicación [2]. Salir de la aplicación [3]. Introducir presiones arteriales [4]. Datos graficos [5]. Historial clínico [6]. Chat con el equipo médico [7]. Vídeos enviados por el médico [8]. Información y ayuda [9].",
		"7":"Esta herramienta nos permite cambiar el idioma de la aplicación. Inicialmente se presenta en tres idiomas, catalan, castellano y inglés.",
		"8":"En esta pantalla és donde introduciremos nuestras medidas de presión arterial (sistólica [3], diastólica [4] y pulso [5]) que se enviarán al equipo médico que realiza el seguimiento. Disponemos tambien de acceso al menú [1] y de herramientas específicas [2].<br />Presionando cualquier de los tres recuadros se abrirá un selector donde podremos escojer la presión sistólica, diastólica y el pulso.",
		"9":"Desplazando arriba y abajo (sistólica [4], diastólica [5] y pulso [6]) podremos seleccionar las presiones y pulso deseados [3] y guardar [2] o cancelar la selección [1].",
		"10":"Tenemos que llenar todos los campos antes de poder enviar las presiones.",
		"11":"En el menú de la izquierda[1] encontraremos herramientas que nos permitiran guardar las presiones introducidas [3], borrar las existentes [2] o cargar las previamente guardadas [4].<br />Encontraremos tambien una pantalla con algunos consejos sober como hacer las medidas de presión arterial [5].",
		"12":"En esta pantalla podremos leer consejos bàsicos sobre como hacer correctamente las medidas de presion arterial en nuestro domicilio [2] i volver a la pantalla anterior [1].",
		"13":"Una vez llenadas las presiones de la mañana y las de la tarde podemos enviar las presiones [1], despues de confirmar en la pantalla de validación que són correctas.",
		"14":"La pantalla de resultados nos muestra nuestro estado de salud a través de un semáforo [1] y una pequeña descripción [2].<br />Tambien podemos encontrar un vídeo [3] seleccionado por el médico con consejos sobre el control de la presión arterial. Estos vídeos i los estados del paciente los podremos recuperar en el apartado correspondiente del menú.",
		"15":"Historia clínica del paciente",
		"16":"Vídeos enviados por el médico",
		"17":"En la sección de gràficos podemos encontrar la evolución del paciente. Podemos encontrar diferentes modalidades de visualización en el menú inferior [3]. En Global veremos un gráfico  de todas nuestras presiones arteriales y en Mañana y Tarde nuestro historial en estas franjas horarias. En Lista tenemos un listado numérico de todas nuestras presiones.<br />En las cuatro pantallas podremos seleccionar los datos que queremos visualizar con los selectores de 1, 3 y 6 meses [1] o introducir directamente el rango de fechas a visualizar con los selectores de fecha[2].",
		"18":"Listado de presiones.",
		"19":"Si presiona el recuadro inferior [5] se abrirá el teclado para que pueda escribir su pregunta al doctor [3], ya solo quedará enviar [6] y esperar la respuesta del doctor [4].Disponemos tambien de acceso al menú [1] i un boton para actualizar manualmente los mensajes [2].",
		"20":"Mis problemas",
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
		"idioma_label":"Escoja idioma",
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
		"btrSS":"ENVIAR",
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
		"licence":"El usuario ha de cumplimentar adecuadamente el formulario de registro para gozar de los beneficios de ser usuario registrado.<br /> Al instalarse este programa el usuario acepta formar parte del seguimiento continuo de su estado mediante centro sanitario y usuario. El usuario acepta y reconoce que la acceptación de la licencia  tiene los mismos efectos que un contrato por escrito, negociado y firmado por usted. Si usted no está de acuerdo, no utilice este programa.",
		//menu lateral esquerra
		//"me_nom":"Register",
      	"me_perfil":"Perfil",
		"me_idioma":"Idioma",
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
		"mis_licence":"Ha leido i aceptador el acuerdo de licéncia",
		
		 
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
		"mp1":"Centres",
		"mg1":"Contacte",
		"mf1":"Info",
		//centre sanitari
		"header_centres":"CENTRES SANITARIS",
		//demo
		"header_demo":"INFORMACIÓ",
		
		
		//demo pacient
		"header_demop":"INFORMATION",
		"1":"Aquesta pantalla és accessible per a pacients no registrats.<br />A la part inferior hi trobem uns enllaços amb informació sobre l’aplicació [2], els centres on actualment es poden apuntar al programa i la informació de contacte, tots accessibles sense estar registrat a l’aplicació.<br />A la part superior hi ha l’accés a l’àrea privada dels pacients [1] que, si prèviament han estat donats d’alta al servidor pel seu metge de capçalera, es podran registrar a l’aplicació amb el seu número de telèfon.<br />Un cop l’usuari està registrat l’aplicació salta aquesta pantalla de presentació i s’accedeix directament al l’àrea de pacient.",
		"2":"Aquestes són tres pantalles bàsiques amb informació sobre l’aplicació, els centres sanitaris col·laboradors [2] i les dades de contacte, a les quals, qualsevol usuari no registrat, que és descarregui l’aplicació, tindrà accès. Amb el botó superior [1] tornem a la pantalla inicial",
		"3":"Els usuaris s’han de registrar a l’aplicació proporcionant el codi de país [1] i el número de telèfon [2], el qual és contrastarà amb la base de dades de l’hospital, si el telèfon introduït és correcte s’enviarà un SMS amb un codi al pacient per tal de validar que és el propietari del telèfon introduït [3].",
		"4":"Si estem registrats, el sistema ens enviarà un SMS que haurem d’introduir en aquest punt [1]. Si l’autenticació és vàlida, un cop acceptat l'acord de llicència [3] accedirem a l’àrea de pacient [2].",
		"5":"Aquí podrem trobar les nostres dades personals així com l’hospital des d’on és realitza el seguiment de la salut del pacient [2].<br />Si alguna dada és incorrecta, siusplau posi’s en contacte amb el seu metge.A la part superior disposem d'un accès al menú [1].",
		"6":"Desplegant el menú lateral tindrem accés a totes les eines que ens ofereix l’aplicació. Dades de l'usuari [1]. Idioma de l'aplicació [2]. Sortir de l'aplicació [3]. Introduir pressions arterial [4]. Dades gràfiques [5]. Historial clínic [6]. Xat amb l'equip mèdic [7]. Vídeos enviats pel metge [8]. Informació i ajuda [9].",
		"7":"Aquest eina ens permetrà canvia l'idioma de l'aplicació. Inicialment es presenta en tres idiomes, català, castellà i anglès.",
		"8":"En aquesta pantalla és on entrarem les nostres mesures de la pressió arterial (sistòlica [3], diastòlica [4] i pols [5]) que s’enviaran a l’equip mèdic que en realitza el seguiment.Disposem també d'accès al menú [1] i d'eines específiques [2].<br />Pressionant qualsevol dels tres requadres es desplegarà un selector on podrem triar la pressió sistòlica, diastòlica i el pols.",
		"9":"Desplaçant amunt i avall (sistòlica [4], diastòlica [5] i pols [6]) podrem seleccionar les pressions i pols desitjats [3] i guardar-los [2] o cancelar la tria [1].",
		"10":"Hem d’omplir tots els camps de pressió abans de poder enviar les pressions.",
		"11":"Al menú de l’esquerra [1] trobarem eines que ens permetran guardar les pressions entrades [3], esborrar les existents [2] o carregar les prèviament guardades [4].<br />Així com una pantalla amb alguns consells sobre com fer la mesura de pressió arterial [5].",
		"12":"En aquesta pantalla hi podem llegir un cosells bàsics de com fer correctament les mesures de pressió arterial al nostre domicili [2] i tornar a la pantalla anterior [1].",
		"13":"Un cop hem omplert totes les mesures del mati i de la tarda podem enviar les pressions [1], desprès de confirmar a la pantalla de validació que són correctes.",
		"14":"La pantalla de resultats ens mostra el nostre estat de salut a través d’un semàfor [1] i una petita descripció [2].<be />També hi podrem trobar un vídeo [3] seleccionat pel metge amb consells sobre el control de la pressió arterial. Aquests vídeos i els estats els podrem recuperar sempre que vulguem a l’apartat corresponent del menú.",
		"15":"Història clínica del pacient",
		"16":"Vídeos enviats pel metge",
		"17":"En la secció de gràfics podreu trobar l’evolució del pacient. Hi podem trobar diferents modalitats de visualització en el menú inferior [3]. A Global veurem l’historial de totes les nostres pressions arterials i a Mati i Tarda dividits en aquestes franjes horàries. A llista hi tenim un llistat numèric de totes les nostres pressions.<br />En totes quatre pantalles podrem seleccionar les dates que volem visualitzar amb els selectors de 1, 3 i 6 mesos [1] o introduint directament el rang de dates a visualitzar amb els selectors de data [2].",
		"18":"Llistat pressions.",
		"19":"Si toca el requadre inferior [5] es desplegarà el teclat per a que pugui escriure la seva consulta al metge [3], ja tant sols li quedarà enviar [6] i esperar la resposta del doctor [4].Disposa també d'accès al menú [1] i un botó per actualitzar manualment els missatges [2].",
		"20":"Els meus problemes",
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
		"idioma_label":"Esculli idioma",
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
		"btrSS":"ENVIAR",
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
		"licence":"L'usuari ha de cumplimentar adecuadament el formulari de registre per tal de gaudir dels beneficis de ser usuari registrat.<br /> En instal·lar-se aquest programa l'usuari accepta formar part del seguiment continu del seu estat a través de centre sanitari i usuari. L'usuari accepta i reconeix que l'acceptació de la llicència té els mateixos efectes que un contracte per escrit, negociat i firmat per vostè. Si no hi està d'acord, no utilitzi el programa.",
		//menu lateral esquerra
		//"me_nom":"Register",
      	"me_perfil":"Perfil",
		"me_idioma":"Idioma",
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
		"mis_licence":"Ha llegit i acceptat l'acord de llicència",
		
			
			
	};
	
	
	
	
	
	
	
	
	
	

