function server_admin(){

$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationShow/'+ 1, function(centre){

    document.getElementById("ad_logo").src= 'http://app2.hesoftgroup.eu/admin/restOrganizationDownloadLogo/'+ 1;
	document.getElementById('ad_CS_nom').innerHTML = centre.name;
	document.getElementById('ad_CS_nom1').innerHTML = centre.reportText;
	document.getElementById('ad_CS_descripcio').innerHTML = centre.description;
	document.getElementById('ad_CS_contactadr').innerHTML = centre.contactAddress;
	document.getElementById('ad_CS_contactcom').innerHTML = centre.contactComments;
	document.getElementById('ad_CS_contactweb').innerHTML = centre.contactWebpage;
	document.getElementById('ad_CS_contactpax').innerHTML = centre.contactPerson;
	document.getElementById('ad_CS_contactpho').innerHTML = centre.contactPhone;
	document.getElementById('ad_CS_contactml').innerHTML = centre.contactEmail;

	
});

}


function server_admin_p(){

$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationShow/'+ 1, function(centre){

    document.getElementById("ad_logo_p").src= 'http://app2.hesoftgroup.eu/admin/restOrganizationDownloadLogo/'+ 1;
	document.getElementById('ad_CS_nom_p').innerHTML = centre.name;
	document.getElementById('ad_CS_nom1_p').innerHTML = centre.reportText;
	document.getElementById('ad_CS_descripcio_p').innerHTML = centre.description;
	document.getElementById('ad_CS_contactadr_p').innerHTML = centre.contactAddress;
	document.getElementById('ad_CS_contactcom_p').innerHTML = centre.contactComments;
	document.getElementById('ad_CS_contactweb_p').innerHTML = centre.contactWebpage;
	document.getElementById('ad_CS_contactpax_p').innerHTML = centre.contactPerson;
	document.getElementById('ad_CS_contactpho_p').innerHTML = centre.contactPhone;
	document.getElementById('ad_CS_contactml_p').innerHTML = centre.contactEmail;


	
});

}
