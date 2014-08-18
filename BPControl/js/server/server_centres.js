function server_centres(id){

$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationShow/'+ id, function(centre){
    
	document.getElementById('hospital').innerHTML = centre.name;
	
});

}


