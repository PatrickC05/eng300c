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
	// title: "London to NYC Great Circle",
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
        oceancolor: 'rgb(0, 255, 255)',
        showland: true,
        landcolor: 'rgb(230, 145, 56)',
        showlakes: true,
        lakecolor: 'rgb(0, 255, 255)',
        showcountries: true,
        lonaxis: {
            showgrid: true,
            gridcolor: 'rgb(102, 102, 102)'
        },
        lataxis: {
            showgrid: true,
            gridcolor: 'rgb(102, 102, 102)'
        }
	},
};

Plotly.newPlot("myDiv", data, layout);
