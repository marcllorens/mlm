function server_admin(){

$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationShow/'+ 1, function(centre){

    document.getElementById("ad_logo").src= 'http://app2.hesoftgroup.eu/admin/restOrganizationDownloadLogo/'+ 1;
	document.getElementById('ad_CS_nom').innerHTML = centre.name;
	document.getElementById('ad_CS_nom1').innerHTML = centre.reportText;
	document.getElementById('ad_CS_descripcio').innerHTML = centre.description;
	document.getElementById('ad_CS_contactweb').innerHTML = centre.contactWebpage;
	document.getElementById('ad_CS_contactpax').innerHTML = centre.contactPerson;

	
});

}


