function makeplot() {
  Plotly.d3.csv("../data.csv", function(data){ processData(data) } );
};

var layout = {
  title: {text:'Relaxation : rayon spectral vs. Omega'},
  xaxis: {
    title: {
      text: 'Omega'
    },
  },
  yaxis: {
    title: {
      text: 'Rayon Spectral',
    },
    range: [0, 1.1],
  }
};


function processData(allRows) {
  var x = [], y = [];
  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['omega'] );
    y.push( row['rho'] );
  }
  makePlotly( x, y );
}

function makePlotly( x, y){
  var plotDiv = document.getElementById("plot");
  var traces = [{
    x: x,
    y: y,
  }];


  Plotly.newPlot('relaxation', traces,layout, {responsive: true});
};
makeplot();
