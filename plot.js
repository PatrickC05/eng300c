var data = [
	{
		type: "scattergeo",
		lat: [40.7127, 51.5072],
		lon: [-74.0059, 0.1275],
		mode: "lines",
		line: {
			width: 2,
			color: "blue",
		},
	},
];

var layout = {
    autosize: true,
	showlegend: false,
	geo: {
		projection: {
			type: "orthographic",
			rotation: {
				lon: -74,
				lat: 40.7,
			},
		},
		showocean: true,
        oceancolor: 'rgb(127, 205, 255)',
        showland: true,
        landcolor: 'rgb(0, 192, 0)',
        showlakes: true,
        lakecolor: 'rgb(127, 205, 255)',
        showcountries: true,
        lonaxis: {
            showgrid: true,
            gridcolor: 'rgb(102, 102, 102)'
        },
        lataxis: {
            showgrid: true,
            gridcolor: 'rgb(102, 102, 102)'
        },
		bgcolor: 'rgb(20,22,22)',
	},
	margin: { l: 0, r: 0, t: 0, b: 0 },
	paper_bgcolor: 'rgb(20,22,22)',
	plot_bgcolor: 'rgb(20,22,22)',
};

Plotly.newPlot("globe", data, layout);
