function server_centres_all(){
	
$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationList', function(center){
   
var di ='<div> ';
	 
$.each( center, function( index, item){
	
	di+=' <img class="zoom" style="max-width:200px;height:130px; border:hidden; border-radius:6px;box-shadow: 0 20px 10px -10px rgba(0,0,0,0.4);" id="logoc" src="http://app2.hesoftgroup.eu/admin/restOrganizationDownloadLogo/'+ item.id +'";  /><p style="margin:10px; margin-top:20px; width:80%;text-align:left;color:#A00;font-weight:bold;">'+item.name+'</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.description || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.reportText || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.contactAddress || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.contactComments || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.contactPerson || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.contactPhone || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.contactWebpage || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.contactEmail || '<empty>') + '</p><br> <hr id="barra"/><br>';
     });
	
di+='</div>';
$("#server_centres_all").html(di);	
});

}


