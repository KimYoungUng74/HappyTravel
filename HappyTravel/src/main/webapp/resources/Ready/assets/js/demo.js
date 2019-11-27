
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
                "href": "#"
            },
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>"
            }
        },
        "ZA": {
            "value": "50586757",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>"
            }
        },
        "AL": {
            "value": "3215988",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>"
            }
        },
        "DZ": {
            "value": "35980193",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>"
            }
        },
        "DE": {
            "value": "81726000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>"
            }
        },
        "AD": {
            "value": "86165",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>"
            }
        },
        "AO": {
            "value": "19618432",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>"
            }
        },
        "AG": {
            "value": "89612",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>"
            }
        },
        "SA": {
            "value": "28082541",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>"
            }
        },
        "AR": {
            "value": "40764561",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>"
            }
        },
        "AM": {
            "value": "3100236",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>"
            }
        },
        "AU": {
            "value": "22620600",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>"
            }
        },
        "AT": {
            "value": "8419000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>"
            }
        },
        "AZ": {
            "value": "9168000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>"
            }
        },
        "BS": {
            "value": "347176",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>"
            }
        },
        "BH": {
            "value": "1323535",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>"
            }
        },
        "BD": {
            "value": "150493658",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>"
            }
        },
        "BB": {
            "value": "273925",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>"
            }
        },
        "BE": {
            "value": "11008000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>"
            }
        },
        "BZ": {
            "value": "356600",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>"
            }
        },
        "BJ": {
            "value": "9099922",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>"
            }
        },
        "BT": {
            "value": "738267",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>"
            }
        },
        "BY": {
            "value": "9473000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>"
            }
        },
        "MM": {
            "value": "48336763",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>"
            }
        },
        "BO": {
            "value": "10088108",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>"
            }
        },
        "BA": {
            "value": "3752228",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>"
            }
        },
        "BW": {
            "value": "2030738",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>"
            }
        },
        "BR": {
            "value": "196655014",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>"
            }
        },
        "BN": {
            "value": "405938",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>"
            }
        },
        "BG": {
            "value": "7476000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>"
            }
        },
        "BF": {
            "value": "16967845",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>"
            }
        },
        "BI": {
            "value": "8575172",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>"
            }
        },
        "KH": {
            "value": "14305183",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>"
            }
        },
        "CM": {
            "value": "20030362",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>"
            }
        },
        "CA": {
            "value": "34482779",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>"
            }
        },
        "CV": {
            "value": "500585",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>"
            }
        },
        "CF": {
            "value": "4486837",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>"
            }
        },
        "CL": {
            "value": "17269525",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>"
            }
        },
        "CN": {
            "value": "13",
            "href": "",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>"
            }
        },
        "CY": {
            "value": "1116564",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/>"
            }
        },
        "CO": {
            "value": "46927125",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>"
            }
        },
        "KM": {
            "value": "753943",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>"
            }
        },
        "CG": {
            "value": "4139748",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>"
            }
        },
        "CD": {
            "value": "67757577",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>"
            }
        },
        "KP": {
            "value": "24451285",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>"
            }
        },
        "KR": {
            "value": "49779000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>"
            }
        },
        "CR": {
            "value": "4726575",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>"
            }
        },
        "CI": {
            "value": "20152894",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>"
            }
        },
        "HR": {
            "value": "4407000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>"
            }
        },
        "CU": {
            "value": "11253665",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>"
            }
        },
        "DK": {
            "value": "5574000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>"
            }
        },
        "DJ": {
            "value": "905564",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>"
            }
        },
        "DM": {
            "value": "67675",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>"
            }
        },
        "EG": {
            "value": "82536770",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>"
            }
        },
        "AE": {
            "value": "7890924",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>"
            }
        },
        "EC": {
            "value": "14666055",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>"
            }
        },
        "ER": {
            "value": "5415280",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>"
            }
        },
        "ES": {
            "value": "46235000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>"
            }
        },
        "EE": {
            "value": "1340000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>"
            }
        },
        "US": {
            "value": "311591917",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">United States<\/span><br \/>"
            }
        },
        "ET": {
            "value": "84734262",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>"
            }
        },
        "FJ": {
            "value": "868406",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>"
            }
        },
        "FI": {
            "value": "5387000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>"
            }
        },
        "FR": {
            "value": "65436552",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">France<\/span><br \/>"
            }
        },
        "GA": {
            "value": "1534262",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>"
            }
        },
        "GM": {
            "value": "1776103",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>"
            }
        },
        "GE": {
            "value": "4486000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>"
            }
        },
        "GH": {
            "value": "24965816",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>"
            }
        },
        "GR": {
            "value": "11304000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>"
            }
        },
        "GD": {
            "value": "104890",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>"
            }
        },
        "GT": {
            "value": "14757316",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>"
            }
        },
        "GN": {
            "value": "10221808",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>"
            }
        },
        "GQ": {
            "value": "720213",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>"
            }
        },
        "GW": {
            "value": "1547061",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>"
            }
        },
        "GY": {
            "value": "756040",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>"
            }
        },
        "HT": {
            "value": "10123787",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>"
            }
        },
        "HN": {
            "value": "7754687",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>"
            }
        },
        "HU": {
            "value": "9971000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>"
            }
        },
        "JM": {
            "value": "2709300",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>"
            }
        },
        "JP": {
            "value": "127817277",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>"
            }
        },
        "MH": {
            "value": "54816",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>"
            }
        },
        "PW": {
            "value": "20609",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>"
            }
        },
        "SB": {
            "value": "552267",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>"
            }
        },
        "IN": {
            "value": "1241491960",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">India<\/span><br \/>"
            }
        },
        "ID": {
            "value": "242325638",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>"
            }
        },
        "JO": {
            "value": "6181000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>"
            }
        },
        "IR": {
            "value": "74798599",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>"
            }
        },
        "IQ": {
            "value": "32961959",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>"
            }
        },
        "IE": {
            "value": "4487000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>"
            }
        },
        "IS": {
            "value": "319000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>"
            }
        },
        "IL": {
            "value": "7765700",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>"
            }
        },
        "IT": {
            "value": "60770000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>"
            }
        },
        "KZ": {
            "value": "16558459",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>"
            }
        },
        "KE": {
            "value": "41609728",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>"
            }
        },
        "KG": {
            "value": "5507000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>"
            }
        },
        "KI": {
            "value": "101093",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>"
            }
        },
        "KW": {
            "value": "2818042",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>"
            }
        },
        "LA": {
            "value": "6288037",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>"
            }
        },
        "LS": {
            "value": "2193843",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>"
            }
        },
        "LV": {
            "value": "2220000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>"
            }
        },
        "LB": {
            "value": "4259405",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>"
            }
        },
        "LR": {
            "value": "4128572",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>"
            }
        },
        "LY": {
            "value": "6422772",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>"
            }
        },
        "LI": {
            "value": "36304",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>"
            }
        },
        "LT": {
            "value": "3203000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>"
            }
        },
        "LU": {
            "value": "517000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>"
            }
        },
        "MK": {
            "value": "2063893",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>"
            }
        },
        "MG": {
            "value": "21315135",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>"
            }
        },
        "MY": {
            "value": "28859154",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/>"
            }
        },
        "MW": {
            "value": "15380888",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>"
            }
        },
        "MV": {
            "value": "320081",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>"
            }
        },
        "ML": {
            "value": "15839538",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>"
            }
        },
        "MT": {
            "value": "419000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>"
            }
        },
        "MA": {
            "value": "32272974",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>"
            }
        },
        "MU": {
            "value": "1286051",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>"
            }
        },
        "MR": {
            "value": "3541540",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>"
            }
        },
        "MX": {
            "value": "114793341",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mexico<\/span><br \/>"
            }
        },
        "FM": {
            "value": "111542",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>"
            }
        },
        "MD": {
            "value": "3559000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>"
            }
        },
        "MC": {
            "value": "35427",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>"
            }
        },
        "MN": {
            "value": "2800114",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>"
            }
        },
        "ME": {
            "value": "632261",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>"
            }
        },
        "MZ": {
            "value": "23929708",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>"
            }
        },
        "NA": {
            "value": "2324004",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>"
            }
        },
        "NP": {
            "value": "30485798",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>"
            }
        },
        "NI": {
            "value": "5869859",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>"
            }
        },
        "NE": {
            "value": "16068994",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>"
            }
        },
        "NG": {
            "value": "162470737",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>"
            }
        },
        "NO": {
            "value": "4952000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>"
            }
        },
        "NZ": {
            "value": "4405200",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br \/>"
            }
        },
        "OM": {
            "value": "2846145",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>"
            }
        },
        "UG": {
            "value": "34509205",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>"
            }
        },
        "UZ": {
            "value": "29341200",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>"
            }
        },
        "PK": {
            "value": "176745364",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>"
            }
        },
        "PS": {
            "value": "4019433",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>"
            }
        },
        "PA": {
            "value": "3571185",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>"
            }
        },
        "PG": {
            "value": "7013829",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>"
            }
        },
        "PY": {
            "value": "6568290",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>"
            }
        },
        "NL": {
            "value": "16696000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>"
            }
        },
        "PE": {
            "value": "29399817",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>"
            }
        },
        "PH": {
            "value": "94852030",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>"
            }
        },
        "PL": {
            "value": "38216000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>"
            }
        },
        "PT": {
            "value": "10637000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>"
            }
        },
        "QA": {
            "value": "1870041",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>"
            }
        },
        "DO": {
            "value": "10056181",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br \/>"
            }
        },
        "RO": {
            "value": "21390000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>"
            }
        },
        "GB": {
            "value": "62641000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>"
            }
        },
        "RU": {
            "value": "141930000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Russian Federation<\/span><br \/>"
            }
        },
        "RW": {
            "value": "10942950",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>"
            }
        },
        "KN": {
            "value": "53051",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>"
            }
        },
        "SM": {
            "value": "31735",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>"
            }
        },
        "VC": {
            "value": "109365",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>"
            }
        },
        "LC": {
            "value": "176000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>"
            }
        },
        "SV": {
            "value": "6227491",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>"
            }
        },
        "WS": {
            "value": "183874",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>"
            }
        },
        "ST": {
            "value": "168526",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>"
            }
        },
        "SN": {
            "value": "12767556",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/>"
            }
        },
        "RS": {
            "value": "7261000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>"
            }
        },
        "SC": {
            "value": "86000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>"
            }
        },
        "SL": {
            "value": "5997486",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>"
            }
        },
        "SG": {
            "value": "5183700",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>"
            }
        },
        "SK": {
            "value": "5440000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>"
            }
        },
        "SI": {
            "value": "2052000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>"
            }
        },
        "SO": {
            "value": "9556873",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>"
            }
        },
        "SD": {
            "value": "34318385",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>"
            }
        },
        "SS": {
            "value": "10314021",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>"
            }
        },
        "LK": {
            "value": "20869000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>"
            }
        },
        "SE": {
            "value": "9453000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>"
            }
        },
        "CH": {
            "value": "7907000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>"
            }
        },
        "SR": {
            "value": "529419",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>"
            }
        },
        "SZ": {
            "value": "1067773",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>"
            }
        },
        "SY": {
            "value": "20820311",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>"
            }
        },
        "TJ": {
            "value": "6976958",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>"
            }
        },
        "TZ": {
            "value": "46218486",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>"
            }
        },
        "TD": {
            "value": "11525496",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>"
            }
        },
        "CZ": {
            "value": "10546000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>"
            }
        },
        "TH": {
            "value": "69518555",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>"
            }
        },
        "TL": {
            "value": "1175880",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>"
            }
        },
        "TG": {
            "value": "6154813",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>"
            }
        },
        "TO": {
            "value": "104509",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>"
            }
        },
        "TT": {
            "value": "1346350",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>"
            }
        },
        "TN": {
            "value": "10673800",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>"
            }
        },
        "TM": {
            "value": "5105301",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>"
            }
        },
        "TR": {
            "value": "73639596",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>"
            }
        },
        "TV": {
            "value": "9847",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>"
            }
        },
        "VU": {
            "value": "245619",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>"
            }
        },
        "VE": {
            "value": "29278000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span><br \/>"
            }
        },
        "VN": {
            "value": "87840000",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>"
            }
        },
        "UA": {
            "value": "45706100",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>"
            }
        },
        "UY": {
            "value": "3368595",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>"
            }
        },
        "YE": {
            "value": "24799880",
            "href": "#",
            "tooltip": {
                "content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>"
            }
        },
        "ZM": {
            "value": "13474959",
            "href": "#",
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