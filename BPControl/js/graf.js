// GRAFICA MATI
	
function grph_mati(){
	 
	 $('#container_m').highcharts({
		
        chart: {
			type: 'spline'
        },
		
		data: {
			
            table: document.getElementById('grf_table_m')
        },
		series: [{type:'spline',lineWidth: 3, index:3, visible:true},{type:'spline',lineWidth: 3, index:4, visible:true},{type: 'column', visible: false, color: '#CCC', index:2}],
		exporting: {enabled: false},
       title: {
            text: ''
        },
		  xAxis: {
			    
                        labels:
                        {
                            enabled: true
                        }
                    }, 
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:document.getElementById('pad').innerHTML,
                dashStyle: 'ShortDash',
				label : {
						text : 'PAD  '+ document.getElementById('pad').innerHTML
					}
            },{
					value :document.getElementById('pas').innerHTML,
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAS  '+ document.getElementById('pas').innerHTML
					}
				}],
            allowDecimals: false,
			title: {
                text: null//document.getElementById('graf_pa').innerHTML
            },
           
        },
		credits: {
            enabled: false
        },
		 legend: {
            align: 'left',
		    layout: 'vertical',
            backgroundColor: '#FFFFFF',
			borderRadius: 5,
            borderWidth: 1,
            verticalAlign: 'top',
            x: 44,
            y: 270,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
		tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.point.y +' '+ this.point.name.toLowerCase();
            }
        }
    });
}
	
	//GRAFICA TARDA
	
function grph_tarda(){
	 
	$('#container_t').highcharts({
		
        chart: {
			type: 'spline'
        },
		
		data: {
            table: document.getElementById('grf_table_t')
        },
		series: [{type:'spline',lineWidth: 3, index:3},{type:'spline',lineWidth: 3, index:4},{type: 'column',visible: false, color: '#CCC', index:2}],
		exporting: {enabled: false},
       title: {
            text: ''
        },
		 xAxis: {
                        labels:
                        {
                            enabled: true
                        }
                    },
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:document.getElementById('pad').innerHTML,
                dashStyle: 'ShortDash',
				label : {
						text : 'PAD'
					}
            },{
					value :document.getElementById('pas').innerHTML,
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAS'
					}
				}],
            allowDecimals: false,
            title: {
                text: null//document.getElementById('graf_pa').innerHTML
            }
        },
		credits: {
            enabled: false
        },
		 legend: {
            align: 'left',
		    layout: 'vertical',
            backgroundColor: '#FFFFFF',
			borderRadius: 5,
            borderWidth: 1,
            verticalAlign: 'top',
            x: 44,
            y: 270,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
		tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.point.y +' '+ this.point.name.toLowerCase();
            }
        }
    });
}

//GRAFICA GLOBAL

function grph_all(){

	$('#container_all').highcharts({
		
        chart: {
			type: 'spline'
        },
		
		data: {
            table: document.getElementById('grf_table_all')
        },
		series: [{type:'spline',lineWidth: 3, index:3},{type:'spline',lineWidth: 3, index:4},{type: 'column',  visible: false, color: '#CCC', index:2}],
		
		exporting: {enabled: false},
       title: {
            text: ''
        },
		 xAxis: {
                        labels:
                        {
                            enabled: true
                        }
                    },
		
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:document.getElementById('pad').innerHTML,
                dashStyle: 'ShortDash',
				label : {
						text : 'PAD'
					}
            },{
					value :document.getElementById('pas').innerHTML,
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAS'
					}
				}],
            allowDecimals: false,
            title: {
                text: null//document.getElementById('graf_pa').innerHTML
            }
        },
		credits: {
            enabled: false
        },
		 legend: {
            align: 'left',
		    layout: 'vertical',
            backgroundColor: '#FFFFFF',
			borderRadius: 5,
            borderWidth: 1,
            verticalAlign: 'top',
            x: 44,
            y: 270,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
		tooltip: {
	
            formatter: function() {
               return '<b>'+ this.series.name +'</b><br/>'+ this.point.y +' '+ this.point.name.toLowerCase();
			}
		}
    });
	
}



// GRAFICA RESULTATS


function grph_res(){

 $('#container_res').highcharts({

		
        chart: {
			type: 'spline'
        },
		
		data: {
            table: document.getElementById('grf_table_all')
        },
		series: [{type:'spline',lineWidth: 3, index:3},{type:'spline',lineWidth: 3, index:4},{type: 'column', visible: false, color: '#CCC', index:2}],
		
		exporting: {enabled: false},
       title: {
            text: ''
        },
		 xAxis: {
                        labels:
                        {
                            enabled: true
                        }
                    },
		
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:document.getElementById('pad').innerHTML,
                dashStyle: 'ShortDash',
				label : {
						text : 'PAD'
					}
            },{
					value :document.getElementById('pas').innerHTML,
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAS'
					}
				}],
            allowDecimals: false,
            title: {
                text: null//document.getElementById('graf_pa').innerHTML
            }
        },
		credits: {
            enabled: false
        },
		 legend: {
            align: 'left',
		    layout: 'vertical',
            backgroundColor: '#FFFFFF',
			borderRadius: 5,
            borderWidth: 1,
            verticalAlign: 'top',
            x: 44,
            y: 270,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
		tooltip: {
	
            formatter: function() {
               return '<b>'+ this.series.name +'</b><br/>'+ this.point.y +' '+ this.point.name.toLowerCase();
			}
		}
    });
	
}



		





