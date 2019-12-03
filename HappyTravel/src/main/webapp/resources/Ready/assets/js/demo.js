
Circles.create({
	id:           'task-complete',
	radius:       75,
	value:        80,
	maxValue:     100,
	width:        8,
	text:         function(value){return value + '%';},
	colors:       ['#eee', '#1D62F0'],
	duration:     400,
	wrpClass:     'circles-wrp',
	textClass:    'circles-text',
	styleWrapper: true,
	styleText:    true
})

$.notify({
	icon: 'la la-bell',
	title: '여행을 떠나보세요!',
	message: '지도에서 가고싶은 곳을 클릭하시면 해당 국가의 여행정보를 확인할 수 있어요!',
},{
	type: 'success',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 1000,
});

// monthlyChart

Chartist.Pie('#monthlyChart', {
	labels: ['50%', '20%', '30%'],
	series: [50, 20, 30]
}, {
	plugins: [
	Chartist.plugins.tooltip()
	]
});

// trafficChart
var chart = new Chartist.Line('#trafficChart', {
	labels: [1, 2, 3, 4, 5, 6, 7],
	series: [
	[5, 9, 7, 8, 5, 3, 5],
	[6, 9, 5, 10, 2, 3, 7],
	[2, 7, 4, 10, 7, 6, 2]
	]
}, {
	plugins: [
	Chartist.plugins.tooltip()
	],
	low: 0,
	height: "245px",
});

// salesChart
var dataSales = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	series: [
	[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
	[3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
	]
}

var optionChartSales = {
	plugins: [
	Chartist.plugins.tooltip()
	],
	seriesBarDistance: 10,
	axisX: {
		showGrid: false
	},
	height: "245px",
}

var responsiveChartSales = [
['screen and (max-width: 640px)', {
	seriesBarDistance: 5,
	axisX: {
		labelInterpolationFnc: function (value) {
			return value[0];
		}
	}
}]
];

Chartist.Bar('#salesChart', dataSales, optionChartSales, responsiveChartSales);

$(".mapcontainer").mapael({
	map : {
		name : "world_countries",
		zoom: {
			enabled: true,
			maxLevel: 20
		},
		defaultPlot: {
			attrs: {
				fill: "#004a9b"
				, opacity: 0.6
			}
		}, 
		defaultArea: {
			 eventHandlers: {
                 click: function (e, id) {
                	 $(".mapcontainer").trigger('zoom', {
                         area: id,
                         areaMargin: 10
                     });
                 }
             },
			attrs: {
				fill: "#e4e4e4"
				, stroke: "#fafafa"
			}
			, attrsHover: {
				fill: "#59d05d"
			}
			, text: {
				attrs: {
					fill: "#505444"
				}
				, attrsHover: {
					fill: "#000"
				}
			}
		}
	},
	areas: {
				// "department-56": {
				// 	text: {content: "Morbihan", attrs: {"font-size": 10}},
				// 	tooltip: {content: "<b>Morbihan</b> <br /> Bretagne"}
				// },
		"AF": {
            "value": "35320445",
            "attrs": {
                "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1"
            },
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>"
            }
        },
        "ZA": {
            "value": "50586757",
            "href": "http://localhost:8181/travel/inform.do?country=South Africa&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>"
            }
        },
        "AL": {
            "value": "3215988",
            "href": "http://localhost:8181/travel/inform.do?country=Albania&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>"
            }
        },
        "DZ": {
            "value": "35980193",
            "href": "http://localhost:8181/travel/inform.do?country=Algeria&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>"
            }
        },
        "DE": {
            "value": "81726000",
            "href": "http://localhost:8181/travel/inform.do?country=Germany&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>"
            }
        },
        "AD": {
            "value": "86165",
            "href": "http://localhost:8181/travel/inform.do?country=Andorra&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>"
            }
        },
        "AO": {
            "value": "19618432",
            "href": "http://localhost:8181/travel/inform.do?country=Angola&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>"
            }
        },
        "AG": {
            "value": "89612",
            "href": "http://localhost:8181/travel/inform.do?country=Antigua And Barbuda&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>"
            }
        },
        "SA": {
            "value": "28082541",
            "href": "http://localhost:8181/travel/inform.do?country=Saudi&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>"
            }
        },
        "AR": {
            "value": "40764561",
            "href": "http://localhost:8181/travel/inform.do?country=Argentina&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>"
            }
        },
        "AM": {
            "value": "3100236",
            "href": "http://localhost:8181/travel/inform.do?country=Armenia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>"
            }
        },
        "AU": {
            "value": "22620600",
            "href": "http://localhost:8181/travel/inform.do?country=Australia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>"
            }
        },
        "AT": {
            "value": "8419000",
            "href": "http://localhost:8181/travel/inform.do?country=Austria&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>"
            }
        },
        "AZ": {
            "value": "9168000",
            "href": "http://localhost:8181/travel/inform.do?country=Azerbaijan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>"
            }
        },
        "BS": {
            "value": "347176",
            "href": "http://localhost:8181/travel/inform.do?country=Bahamas&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>"
            }
        },
        "BH": {
            "value": "1323535",
            "href": "http://localhost:8181/travel/inform.do?country=Bahrain&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>"
            }
        },
        "BD": {
            "value": "150493658",
            "href": "http://localhost:8181/travel/inform.do?country=Bangladesh&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>"
            }
        },
        "BB": {
            "value": "273925",
            "href": "http://localhost:8181/travel/inform.do?country=Barbados&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>"
            }
        },
        "BE": {
            "value": "11008000",
            "href": "http://localhost:8181/travel/inform.do?country=Belgium&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>"
            }
        },
        "BZ": {
            "value": "356600",
            "href": "http://localhost:8181/travel/inform.do?country=Belize&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>"
            }
        },
        "BJ": {
            "value": "9099922",
            "href": "http://localhost:8181/travel/inform.do?country=Benin&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>"
            }
        },
        "BT": {
            "value": "738267",
            "href": "http://localhost:8181/travel/inform.do?country=Bhutan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>"
            }
        },
        "BY": {
            "value": "9473000",
            "href": "http://localhost:8181/travel/inform.do?country=Belarus&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>"
            }
        },
        "MM": {
            "value": "48336763",
            "href": "http://localhost:8181/travel/inform.do?country=Myanmar&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>"
            }
        },
        "BO": {
            "value": "10088108",
            "href": "http://localhost:8181/travel/inform.do?country=Bolivia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>"
            }
        },
        "BA": {
            "value": "3752228",
            "href": "http://localhost:8181/travel/inform.do?country=Bosnia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>"
            }
        },
        "BW": {
            "value": "2030738",
            "href": "http://localhost:8181/travel/inform.do?country=Botswana&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>"
            }
        },
        "BR": {
            "value": "196655014",
            "href": "http://localhost:8181/travel/inform.do?country=Brazil&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>"
            }
        },
        "BN": {
            "value": "405938",
            "href": "http://localhost:8181/travel/inform.do?country=Brunei&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>"
            }
        },
        "BG": {
            "value": "7476000",
            "href": "http://localhost:8181/travel/inform.do?country=Bulgaria&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>"
            }
        },
        "BF": {
            "value": "16967845",
            "href": "http://localhost:8181/travel/inform.do?country=Burkina&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>"
            }
        },
        "BI": {
            "value": "8575172",
            "href": "http://localhost:8181/travel/inform.do?country=Burundi&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>"
            }
        },
        "KH": {
            "value": "14305183",
            "href": "http://localhost:8181/travel/inform.do?country=Cambodia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>"
            }
        },
        "CM": {
            "value": "20030362",
            "href": "http://localhost:8181/travel/inform.do?country=Cameroon&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>"
            }
        },
        "CA": {
            "value": "34482779",
            "href": "http://localhost:8181/travel/inform.do?country=Canada&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>"
            }
        },
        "CV": {
            "value": "500585",
            "href": "http://localhost:8181/travel/inform.do?country=Cape&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>"
            }
        },
        "CF": {
            "value": "4486837",
            "href": "http://localhost:8181/travel/inform.do?country=Central&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>"
            }
        },
        "CL": {
            "value": "17269525",
            "href": "http://localhost:8181/travel/inform.do?country=Chile&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>"
            }
        },
        "CN": {
            "value": "13",
            "href": "http://localhost:8181/travel/inform.do?country=China&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>"
            }
        },
        "CY": {
            "value": "1116564",
            "href": "http://localhost:8181/travel/inform.do?country=Cyprus&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/>"
            }
        },
        "CO": {
            "value": "46927125",
            "href": "http://localhost:8181/travel/inform.do?country=Colombia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>"
            }
        },
        "KM": {
            "value": "753943",
            "href": "http://localhost:8181/travel/inform.do?country=Comoros&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>"
            }
        },
        "CG": {
            "value": "4139748",
            "href": "http://localhost:8181/travel/inform.do?country=Congo&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>"
            }
        },
        "CD": {
            "value": "67757577",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>"
            }
        },
        "KP": {
            "value": "24451285",
            "href": "http://localhost:8181/travel/inform.do?country=South Korea&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>"
            }
        },
        "KR": {
            "value": "49779000",
            "href": "http://localhost:8181/travel/inform.do?country=South Korea&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>"
            }
        },
        "CR": {
            "value": "4726575",
            "href": "http://localhost:8181/travel/inform.do?country=Costa Rica&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>"
            }
        },
        "CI": {
            "value": "20152894",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>"
            }
        },
        "HR": {
            "value": "4407000",
            "href": "http://localhost:8181/travel/inform.do?country=Croatia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>"
            }
        },
        "CU": {
            "value": "11253665",
            "href": "http://localhost:8181/travel/inform.do?country=Cuba&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>"
            }
        },
        "DK": {
            "value": "5574000",
            "href": "http://localhost:8181/travel/inform.do?country=Denmark&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>"
            }
        },
        "DJ": {
            "value": "905564",
            "href": "http://localhost:8181/travel/inform.do?country=Djibouti&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>"
            }
        },
        "DM": {
            "value": "67675",
            "href": "http://localhost:8181/travel/inform.do?country=Dominica&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>"
            }
        },
        "EG": {
            "value": "82536770",
            "href": "http://localhost:8181/travel/inform.do?country=Egypt&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>"
            }
        },
        "AE": {
            "value": "7890924",
            "href": "http://localhost:8181/travel/inform.do?country=United Arab Emirates&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>"
            }
        },
        "EC": {
            "value": "14666055",
            "href": "http://localhost:8181/travel/inform.do?country=Ecuador&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>"
            }
        },
        "ER": {
            "value": "5415280",
            "href": "http://localhost:8181/travel/inform.do?country=Eritrea&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>"
            }
        },
        "ES": {
            "value": "46235000",
            "href": "http://localhost:8181/travel/inform.do?country=Spain&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>"
            }
        },
        "EE": {
            "value": "1340000",
            "href": "http://localhost:8181/travel/inform.do?country=Estonia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>"
            }
        },
        "US": {
            "value": "311591917",
            "href": "http://localhost:8181/travel/inform.do?country=USA&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">USA<\/span><br \/>"
            }
        },
        "ET": {
            "value": "84734262",
            "href": "http://localhost:8181/travel/inform.do?country=Ethiopia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>"
            }
        },
        "FJ": {
            "value": "868406",
            "href": "http://localhost:8181/travel/inform.do?country=Fiji&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>"
            }
        },
        "FI": {
            "value": "5387000",
            "href": "http://localhost:8181/travel/inform.do?country=Finland&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>"
            }
        },
        "FR": {
            "value": "65436552",
            "href": "http://localhost:8181/travel/inform.do?country=France&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">France<\/span><br \/>"
            }
        },
        "GA": {
            "value": "1534262",
            "href": "http://localhost:8181/travel/inform.do?country=Gabon&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>"
            }
        },
        "GM": {
            "value": "1776103",
            "href": "http://localhost:8181/travel/inform.do?country=Gambia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>"
            }
        },
        "GE": {
            "value": "4486000",
            "href": "http://localhost:8181/travel/inform.do?country=Georgia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>"
            }
        },
        "GH": {
            "value": "24965816",
            "href": "http://localhost:8181/travel/inform.do?country=Ghana&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>"
            }
        },
        "GR": {
            "value": "11304000",
            "href": "http://localhost:8181/travel/inform.do?country=Greece&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>"
            }
        },
        "GD": {
            "value": "104890",
            "href": "http://localhost:8181/travel/inform.do?country=Grenada&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>"
            }
        },
        "GT": {
            "value": "14757316",
            "href": "http://localhost:8181/travel/inform.do?country=Guatemala&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>"
            }
        },
        "GN": {
            "value": "10221808",
            "href": "http://localhost:8181/travel/inform.do?country=Guinea&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>"
            }
        },
        "GQ": {
            "value": "720213",
            "href": "http://localhost:8181/travel/inform.do?country=Equatorial&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>"
            }
        },
        "GW": {
            "value": "1547061",
            "href": "http://localhost:8181/travel/inform.do?country=Guinea-bissau&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>"
            }
        },
        "GY": {
            "value": "756040",
            "href": "http://localhost:8181/travel/inform.do?country=Guyana&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>"
            }
        },
        "HT": {
            "value": "10123787",
            "href": "http://localhost:8181/travel/inform.do?country=Haiti&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>"
            }
        },
        "HN": {
            "value": "7754687",
            "href": "http://localhost:8181/travel/inform.do?country=Honduras&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>"
            }
        },
        "HU": {
            "value": "9971000",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>"
            }
        },
        "JM": {
            "value": "2709300",
            "href": "http://localhost:8181/travel/inform.do?country=Jamaica&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>"
            }
        },
        "JP": {
            "value": "127817277",
            "href": "http://localhost:8181/travel/inform.do?country=Japan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>"
            }
        },
        "MH": {
            "value": "54816",
            "href": "http://localhost:8181/travel/inform.do?country=Marshall Islands&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>"
            }
        },
        "PW": {
            "value": "20609",
            "href": "http://localhost:8181/travel/inform.do?country=Palau&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>"
            }
        },
        "SB": {
            "value": "552267",
            "href": "http://localhost:8181/travel/inform.do?country=Islands&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>"
            }
        },
        "IN": {
            "value": "1241491960",
            "href": "http://localhost:8181/travel/inform.do?country=India&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">India<\/span><br \/>"
            }
        },
        "ID": {
            "value": "242325638",
            "href": "http://localhost:8181/travel/inform.do?country=Indonesia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>"
            }
        },
        "JO": {
            "value": "6181000",
            "href": "http://localhost:8181/travel/inform.do?country=Jordan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>"
            }
        },
        "IR": {
            "value": "74798599",
            "href": "http://localhost:8181/travel/inform.do?country=Iran&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>"
            }
        },
        "IQ": {
            "value": "32961959",
            "href": "http://localhost:8181/travel/inform.do?country=Iraq&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>"
            }
        },
        "IE": {
            "value": "4487000",
            "href": "http://localhost:8181/travel/inform.do?country=Ireland&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>"
            }
        },
        "IS": {
            "value": "319000",
            "href": "http://localhost:8181/travel/inform.do?country=Iceland&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>"
            }
        },
        "IL": {
            "value": "7765700",
            "href": "http://localhost:8181/travel/inform.do?country=Israel&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>"
            }
        },
        "IT": {
            "value": "60770000",
            "href": "http://localhost:8181/travel/inform.do?country=Italy&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>"
            }
        },
        "KZ": {
            "value": "16558459",
            "href": "http://localhost:8181/travel/inform.do?country=Kazakhstan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>"
            }
        },
        "KE": {
            "value": "41609728",
            "href": "http://localhost:8181/travel/inform.do?country=Kenya&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>"
            }
        },
        "KG": {
            "value": "5507000",
            "href": "http://localhost:8181/travel/inform.do?country=Kyrgyzstan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>"
            }
        },
        "KI": {
            "value": "101093",
            "href": "http://localhost:8181/travel/inform.do?country=Kiribati&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>"
            }
        },
        "KW": {
            "value": "2818042",
            "href": "http://localhost:8181/travel/inform.do?country=Kuwait&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>"
            }
        },
        "LA": {
            "value": "6288037",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>"
            }
        },
        "LS": {
            "value": "2193843",
            "href": "http://localhost:8181/travel/inform.do?country=Lesotho&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>"
            }
        },
        "LV": {
            "value": "2220000",
            "href": "http://localhost:8181/travel/inform.do?country=Latvia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>"
            }
        },
        "LB": {
            "value": "4259405",
            "href": "http://localhost:8181/travel/inform.do?country=Lebanon&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>"
            }
        },
        "LR": {
            "value": "4128572",
            "href": "http://localhost:8181/travel/inform.do?country=Liberia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>"
            }
        },
        "LY": {
            "value": "6422772",
            "href": "http://localhost:8181/travel/inform.do?country=Libya&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>"
            }
        },
        "LI": {
            "value": "36304",
            "href": "http://localhost:8181/travel/inform.do?country=Liechtenstein&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>"
            }
        },
        "LT": {
            "value": "3203000",
            "href": "http://localhost:8181/travel/inform.do?country=Lithuania&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>"
            }
        },
        "LU": {
            "value": "517000",
            "href": "http://localhost:8181/travel/inform.do?country=Luxembourg&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>"
            }
        },
        "MK": {
            "value": "2063893",
            "href": "http://localhost:8181/travel/inform.do?country=Macedonia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>"
            }
        },
        "MG": {
            "value": "21315135",
            "href": "http://localhost:8181/travel/inform.do?country=Madagascar&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>"
            }
        },
        "MY": {
            "value": "28859154",
            "href": "http://localhost:8181/travel/inform.do?country=Malaysia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/>"
            }
        },
        "MW": {
            "value": "15380888",
            "href": "http://localhost:8181/travel/inform.do?country=Malawi&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>"
            }
        },
        "MV": {
            "value": "320081",
            "href": "http://localhost:8181/travel/inform.do?country=Maldives&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>"
            }
        },
        "ML": {
            "value": "15839538",
            "href": "http://localhost:8181/travel/inform.do?country=Mali&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>"
            }
        },
        "MT": {
            "value": "419000",
            "href": "http://localhost:8181/travel/inform.do?country=Malta&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>"
            }
        },
        "MA": {
            "value": "32272974",
            "href": "http://localhost:8181/travel/inform.do?country=Morocco&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>"
            }
        },
        "MU": {
            "value": "1286051",
            "href": "http://localhost:8181/travel/inform.do?country=Mauritius&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>"
            }
        },
        "MR": {
            "value": "3541540",
            "href": "http://localhost:8181/travel/inform.do?country=Mauritania&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>"
            }
        },
        "MX": {
            "value": "114793341",
            "href": "http://localhost:8181/travel/inform.do?country=Mexico&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mexico<\/span><br \/>"
            }
        },
        "FM": {
            "value": "111542",
            "href": "http://localhost:8181/travel/inform.do?country=Micronesia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>"
            }
        },
        "MD": {
            "value": "3559000",
            "href": "http://localhost:8181/travel/inform.do?country=Moldova&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>"
            }
        },
        "MC": {
            "value": "35427",
            "href": "http://localhost:8181/travel/inform.do?country=Monaco&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>"
            }
        },
        "MN": {
            "value": "2800114",
            "href": "http://localhost:8181/travel/inform.do?country=Mongolia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>"
            }
        },
        "ME": {
            "value": "632261",
            "href": "http://localhost:8181/travel/inform.do?country=Montenegro&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>"
            }
        },
        "MZ": {
            "value": "23929708",
            "href": "http://localhost:8181/travel/inform.do?country=Mozambique&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>"
            }
        },
        "NA": {
            "value": "2324004",
            "href": "http://localhost:8181/travel/inform.do?country=Namibia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>"
            }
        },
        "NP": {
            "value": "30485798",
            "href": "http://localhost:8181/travel/inform.do?country=Nepal&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>"
            }
        },
        "NI": {
            "value": "5869859",
            "href": "http://localhost:8181/travel/inform.do?country=Nicaragua&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>"
            }
        },
        "NE": {
            "value": "16068994",
            "href": "http://localhost:8181/travel/inform.do?country=Niger&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>"
            }
        },
        "NG": {
            "value": "162470737",
            "href": "http://localhost:8181/travel/inform.do?country=Nigeria&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>"
            }
        },
        "NO": {
            "value": "4952000",
            "href": "http://localhost:8181/travel/inform.do?country=Norway&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>"
            }
        },
        "NZ": {
            "value": "4405200",
            "href": "http://localhost:8181/travel/inform.do?country=New Zealand&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br \/>"
            }
        },
        "OM": {
            "value": "2846145",
            "href": "http://localhost:8181/travel/inform.do?country=Oman&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>"
            }
        },
        "UG": {
            "value": "34509205",
            "href": "http://localhost:8181/travel/inform.do?country=Uganda&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>"
            }
        },
        "UZ": {
            "value": "29341200",
            "href": "http://localhost:8181/travel/inform.do?country=Uzbekistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>"
            }
        },
        "PK": {
            "value": "176745364",
            "href": "http://localhost:8181/travel/inform.do?country=Pakistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>"
            }
        },
        "PS": {
            "value": "4019433",
            "href": "http://localhost:8181/travel/inform.do?country=Palestine&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>"
            }
        },
        "PA": {
            "value": "3571185",
            "href": "http://localhost:8181/travel/inform.do?country=Panama&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>"
            }
        },
        "PG": {
            "value": "7013829",
            "href": "http://localhost:8181/travel/inform.do?country=Papua New Guinea&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>"
            }
        },
        "PY": {
            "value": "6568290",
            "href": "http://localhost:8181/travel/inform.do?country=Paraguay&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>"
            }
        },
        "NL": {
            "value": "16696000",
            "href": "http://localhost:8181/travel/inform.do?country=Netherlands&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>"
            }
        },
        "PE": {
            "value": "29399817",
            "href": "http://localhost:8181/travel/inform.do?country=Peru&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>"
            }
        },
        "PH": {
            "value": "94852030",
            "href": "http://localhost:8181/travel/inform.do?country=Philippines&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>"
            }
        },
        "PL": {
            "value": "38216000",
            "href": "http://localhost:8181/travel/inform.do?country=Poland&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>"
            }
        },
        "PT": {
            "value": "10637000",
            "href": "http://localhost:8181/travel/inform.do?country=Portugal&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>"
            }
        },
        "QA": {
            "value": "1870041",
            "href": "http://localhost:8181/travel/inform.do?country=Qatar&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>"
            }
        },
        "DO": {
            "value": "10056181",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br \/>"
            }
        },
        "RO": {
            "value": "21390000",
            "href": "http://localhost:8181/travel/inform.do?country=Romania&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>"
            }
        },
        "GB": {
            "value": "62641000",
            "href": "http://localhost:8181/travel/inform.do?country=United Kingdom&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>"
            }
        },
        "RU": {
            "value": "141930000",
            "href": "http://localhost:8181/travel/inform.do?country=Russia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Russia<\/span><br \/>"
            }
        },
        "RW": {
            "value": "10942950",
            "href": "http://localhost:8181/travel/inform.do?country=Rwanda&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>"
            }
        },
        "KN": {
            "value": "53051",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>"
            }
        },
        "SM": {
            "value": "31735",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>"
            }
        },
        "VC": {
            "value": "109365",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>"
            }
        },
        "LC": {
            "value": "176000",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>"
            }
        },
        "SV": {
            "value": "6227491",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>"
            }
        },
        "WS": {
            "value": "183874",
            "href": "http://localhost:8181/travel/inform.do?country=Samoa&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>"
            }
        },
        "ST": {
            "value": "168526",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>"
            }
        },
        "SN": {
            "value": "12767556",
            "href": "http://localhost:8181/travel/inform.do?country=Senegal&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/>"
            }
        },
        "RS": {
            "value": "7261000",
            "href": "http://localhost:8181/travel/inform.do?country=Serbia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>"
            }
        },
        "SC": {
            "value": "86000",
            "href": "http://localhost:8181/travel/inform.do?country=Seychelles&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>"
            }
        },
        "SL": {
            "value": "5997486",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>"
            }
        },
        "SG": {
            "value": "5183700",
            "href": "http://localhost:8181/travel/inform.do?country=Singapore&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>"
            }
        },
        "SK": {
            "value": "5440000",
            "href": "http://localhost:8181/travel/inform.do?country=Slovakia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>"
            }
        },
        "SI": {
            "value": "2052000",
            "href": "http://localhost:8181/travel/inform.do?country=Slovenia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>"
            }
        },
        "SO": {
            "value": "9556873",
            "href": "http://localhost:8181/travel/inform.do?country=Somalia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>"
            }
        },
        "SD": {
            "value": "34318385",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>"
            }
        },
        "SS": {
            "value": "10314021",
            "href": "http://localhost:8181/travel/inform.do?country=South Sudan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>"
            }
        },
        "LK": {
            "value": "20869000",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>"
            }
        },
        "SE": {
            "value": "9453000",
            "href": "http://localhost:8181/travel/inform.do?country=Sweden&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>"
            }
        },
        "CH": {
            "value": "7907000",
            "href": "http://localhost:8181/travel/inform.do?country=Switzerland&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>"
            }
        },
        "SR": {
            "value": "529419",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>"
            }
        },
        "SZ": {
            "value": "1067773",
            "href": "http://localhost:8181/travel/inform.do?country=Swaziland&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>"
            }
        },
        "SY": {
            "value": "20820311",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>"
            }
        },
        "TJ": {
            "value": "6976958",
            "href": "http://localhost:8181/travel/inform.do?country=Tajikistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>"
            }
        },
        "TZ": {
            "value": "46218486",
            "href": "http://localhost:8181/travel/inform.do?country=Tanzania&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>"
            }
        },
        "TD": {
            "value": "11525496",
            "href": "http://localhost:8181/travel/inform.do?country=Chad&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>"
            }
        },
        "CZ": {
            "value": "10546000",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>"
            }
        },
        "TH": {
            "value": "69518555",
            "href": "http://localhost:8181/travel/inform.do?country=Thailand&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>"
            }
        },
        "TL": {
            "value": "1175880",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>"
            }
        },
        "TG": {
            "value": "6154813",
            "href": "http://localhost:8181/travel/inform.do?country=Togo&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>"
            }
        },
        "TO": {
            "value": "104509",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>"
            }
        },
        "TT": {
            "value": "1346350",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>"
            }
        },
        "TN": {
            "value": "10673800",
            "href": "http://localhost:8181/travel/inform.do?country=Tunisia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>"
            }
        },
        "TM": {
            "value": "5105301",
            "href": "http://localhost:8181/travel/inform.do?country=Turkmenistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>"
            }
        },
        "TR": {
            "value": "73639596",
            "href": "http://localhost:8181/travel/inform.do?country=Turkey&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>"
            }
        },
        "TV": {
            "value": "9847",
            "href": "http://localhost:8181/travel/inform.do?country=Tuvalu&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>"
            }
        },
        "VU": {
            "value": "245619",
            "href": "http://localhost:8181/travel/inform.do?country=Vanuatu&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>"
            }
        },
        "VE": {
            "value": "29278000",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span><br \/>"
            }
        },
        "VN": {
            "value": "87840000",
            "href": "http://localhost:8181/travel/inform.do?country=Afghanistan&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>"
            }
        },
        "UA": {
            "value": "45706100",
            "href": "http://localhost:8181/travel/inform.do?country=Ukraine&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>"
            }
        },
        "UY": {
            "value": "3368595",
            "href": "http://localhost:8181/travel/inform.do?country=Uruguay&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>"
            }
        },
        "YE": {
            "value": "24799880",
            "href": "http://localhost:8181/travel/inform.do?country=Yemen&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>"
            }
        },
        "ZM": {
            "value": "13474959",
            "href": "http://localhost:8181/travel/inform.do?country=Zambia&page=1",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Zambia<\/span><br \/>"
            }
        },
        "ZW": {
            "value": "12754378",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br \/>"
            }
        }
			},
		});