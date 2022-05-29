const initial_point = [40.7127, -74.0059];
const OPACITY = 0.5;
const START = 15;
const WIDTH = 0.75;
const RED = "rgb(180,75,75)";
const NUM_POINTS = cities.length;
let current_points = [];
var data = [];

function gen_point(point) {
	const random = Math.floor(Math.random() * NUM_POINTS);
	return [cities[random].lat, cities[random].lng];
}

for (let i = 0; i < START; i++) {
	let new_point = gen_point(initial_point);
	data.push({
		type: "scattergeo",
		lat: [initial_point[0], new_point[0]],
		lon: [initial_point[1], new_point[1]],
		mode: "lines",
		line: {
			width: WIDTH,
			color: RED,
		},
		opacity: OPACITY,
	});
	current_points.push(new_point);
}

for (point of current_points) {
	
	for (let i = 0; i < START; i++) {
		let new_point = gen_point(point);
		data.push({
			type: "scattergeo",
			lat: [point[0], new_point[0]],
			lon: [point[1], new_point[1]],
			mode: "lines",
			line: {
				width: WIDTH,
				color: RED,
			},
			opacity: OPACITY,
		});
	}
}

var layout = {
    autosize: true,
	showlegend: false,
	geo: {
		projection: {
			type: "equirectangular",
			// rotation: {
			// 	lon: -74,
			// 	lat: 40.7,
			// },
		},
		showocean: true,
        oceancolor: 'rgb(100, 180, 230)',
        showland: true,
        landcolor: 'rgb(0, 210, 0)',
        showlakes: true,
        lakecolor: 'rgb(100, 180, 230)',
        showcountries: true,
        // lonaxis: {
        //     showgrid: true,
        //     gridcolor: 'rgb(102, 102, 102)'
        // },
        // lataxis: {
        //     showgrid: true,
        //     gridcolor: 'rgb(102, 102, 102)'
        // },
		bgcolor: 'rgb(20,22,22)',
	},
	margin: { l: 0, r: 0, t: 0, b: 0 },
	paper_bgcolor: 'rgb(20,22,22)',
	plot_bgcolor: 'rgb(20,22,22)',
};
Plotly.newPlot("globe", data, layout);

document.querySelector("#slider").addEventListener("input", function(e) {
	var value = e.target.value;
	document.querySelector("#num").innerHTML = value;
});

document.querySelector("#slider").addEventListener("change", function(e) {
	var mydata = [];
	var mycurrent_points = [];
	var value = e.target.value;
	for (let i = 0; i < value; i++) {
		let new_point = gen_point(initial_point);
		mydata.push({
			type: "scattergeo",
			lat: [initial_point[0], new_point[0]],
			lon: [initial_point[1], new_point[1]],
			mode: "lines",
			line: {
				width: WIDTH,
				color: RED,
			},
			opacity: OPACITY,
		});
		mycurrent_points.push(new_point);
	}

	for (point of mycurrent_points) {
		
		for (let i = 0; i < value; i++) {
			let new_point = gen_point(point);
			mydata.push({
				type: "scattergeo",
				lat: [point[0], new_point[0]],
				lon: [point[1], new_point[1]],
				mode: "lines",
				line: {
					width: WIDTH,
					color: RED,
				},
				opacity: OPACITY
			});
		}
	}
	Plotly.newPlot("globe", mydata, layout);
});