function grph(){
   
	
       /* $('#container1').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            
                            series.addPoint([x, y], true, true);
                        }, 2000);
                    }
                }
            },
           exporting: {enabled: false},
       title: {
            text: ''
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
            x: 64,
            y: -10,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            
            
            series: [{
				data: {table: document.getElementById('grf_table')}
              	/*data: (function() {
         		 var data = document.getElementById('grf_table');
		         var time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 2000,
                            y: Math.random()
                        });
                    }
                    return data;
                })()//aqui hi va final de comnetari
				
            }]
        });
   
		*/

	
	// GRAFICA MATI
	
	 $('#container').highcharts({
		
        chart: {
			zoomType: 'x'
        },
		
		data: {
            table: document.getElementById('grf_table2')
        },
		
		exporting: {enabled: false},
       title: {
            text: ''
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
            x: 64,
            y: -10,
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
	
	
	
	//GRAFICA TARDA
	
	$('#container3').highcharts({
		
        chart: {
			zoomType: 'x'
        },
		
		data: {
            table: document.getElementById('grf_table2')
        },
		
		exporting: {enabled: false},
       title: {
            text: ''
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
            x: 64,
            y: -10,
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



//GRAFICA GLOBAL


  $('#container2').highcharts('StockChart', {

            chart: {
                type: 'arearange'
            },

            rangeSelector: {
                allButtonsEnabled: true,
                inputEnabled: $('#container2').width() > 480,
                selected: 2
            },

            data: {
            table: document.getElementById('grf_table2')
        },
		
		exporting: {enabled: false},
       title: {
            text: ''
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
            x: 64,
            y: -10,
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


/* $('#container2').highcharts({
		
        chart: {
			zoomType: 'x'
        },
		
		data: {
            table: document.getElementById('grf_table2')
        },
		
		exporting: {enabled: false},
       title: {
            text: ''
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
            x: 64,
            y: -10,
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
    });*/
	
}