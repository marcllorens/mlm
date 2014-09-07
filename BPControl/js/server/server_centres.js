function server_centres(id){

$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationShow/'+ id, function(centre){
    
	
	document.getElementById('hospital').innerHTML = centre.name;
	document.getElementById('CS_nom').innerHTML = centre.name;
	document.getElementById('CS_nom1').innerHTML = centre.reportText;
	document.getElementById('CS_descripcio').innerHTML = centre.description;
	document.getElementById('CS_contactweb').innerHTML = centre.contactWebpage;
	document.getElementById('CS_contactpax').innerHTML = centre.contactPerson;
	document.getElementById("logo").src= 'http://app2.hesoftgroup.eu/admin/restOrganizationDownloadLogo/'+ id;
	
});

}


