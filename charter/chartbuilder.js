let red = "#EB2A00";
let orange = "#FF7658";
let pink = "#FFA996";
let yellow = "#F4CA46";
let beige = "#EED7C5";
let chartHeight = "600";
let chartWidth = "600";

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPopulationChart);
google.charts.setOnLoadCallback(drawClosedFoodProvsChart);
google.charts.setOnLoadCallback(drawIncomeChart);
google.charts.setOnLoadCallback(drawPovertyChart);
google.charts.setOnLoadCallback(drawHDIChart);

function drawPopulationChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "White %", "Black %", "Asian", "Other or Mixed %"],
    [1910, 99, 0.96, 0.04, 0.01],
    [1920, 99.31, 0.66, 0.03, 0],
    [1930, 98.94, 1.02, 0.04, 0],
    [1940, 98.25, 1.69, 0.06, 0],
    [1950, 93.14, 6.74, 0.09, 0.04],
    [1960, 88.17, 11.5, 0.25, 0.08],
    [1970, 73.44, 24.3, 0.53, 1.72],
    [1980, 47.4, 31.82, 1.3, 19.49],
    [1990, 35.73, 37.33, 2.95, 23.99],
    [2000, 29.87, 35.64, 3.11, 31.38],
    [2010, 27.9, 36.47, 3.68, 31.95],
  ]);

  var options = {
    title: "Population Change in the South Bronx",
    titleTextStyle: { position: "center", color: "#fff" },
    curveType: "function",
    legend: { position: "bottom", textStyle: { color: "#fff" } },
    fontName: "Source Sans Pro",
    height: chartHeight,
    hAxis: {
      format: "0000", // needed to format year
      baseline: 1910,
      baselineColor: "white",
      gridlines: { color: "transparent", count: 4 },
      textStyle: { color: "#fff" },
    },
    vAxis: {
      baseline: -20,
      baselineColor: "white",
      gridlines: { color: "transparent" },
      textStyle: { color: "#fff" },
    },
    backgroundColor: "transparent",
    // colors: [red, orange, pink, yellow, beige]
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("whiteflight")
  );
  chart.draw(data, options);
}

function drawClosedFoodProvsChart() {
  var data = google.visualization.arrayToDataTable([
    ["Borough", "Closed %", { role: "style" }],
    ["Bronx", 50, red],
    ["Queens", 38, pink],
    ["Brooklyn", 36, orange],
    ["Manhattan", 32, yellow],
    ["Staten Island", 28, beige],
  ]);

  var options = {
    title: "Closed Emergency Food Providers (%)",
    legend: { position: "none" },
    fontName: "Source Sans Pro",

    height: chartHeight,
    // color: 'white',
    // backgroundColor: '#121212',
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("closedFoodProviders")
  );
  chart.draw(data, options);
}
// <div id="whiteflight" style="width: 900px; height: 300px; background: #121212"></div>
function drawIncomeChart() {
  var data = google.visualization.arrayToDataTable([
    ["Borough", "US$"],
    ["South Bronx", 24849],
    ["Bronx", 38467],
    ["Brooklyn", 61220],
    ["NYC", 63799],
    ["Queens", 69320],
    ["Staten Island", 82166],
    ["Manhattan", 85066],
    ["Upper East Side", 120868],
  ]);

  var options = {
    title: "Median Household Income 2021 (US$) ",
    legend: { position: "none" },
    fontName: "Source Sans Pro",
    // height: chartHeight,
    // color: 'white',
    // backgroundColor: '#121212',
  };
  var chart = new google.visualization.ColumnChart(
    document.getElementById("medianHouseholdIncome")
  );
  chart.draw(data, options);
}

function drawPovertyChart() {
  var data = google.visualization.arrayToDataTable([
    ["Borough", "%"],
    ["South Bronx", 40.3],
    ["Bronx", 27.4],
    ["Brooklyn", 19],
    ["Manhattan", 15.5],
    ["Queens", 11.5],
    ["Staten Island", 11.4],
    ["NYC", 6.1],
    ["Upper East Side", 5.8],
  ]);

  var options = {
    title: "Poverty (%)",
    legend: { position: "none" },
    fontName: "Source Sans Pro",
    colors: [red, orange, pink, yellow, beige],
    // color: 'white',
    // backgroundColor: '#121212',
  };
  var chart = new google.visualization.ColumnChart(
    document.getElementById("poverty")
  );
  chart.draw(data, options);
}

function drawHDIChart() {
  var data = google.visualization.arrayToDataTable([
    ["Borough", "HDI Index", { role: "style" }],
    ["Upper East Side", 8.95, pink],
    ["Manhattan", 8.04, pink],
    ["Staten Island", 6.49, pink],
    ["Queens", 6.44, pink],
    ["Brooklyn", 6.26, pink],
    ["NYC", 6.15, pink],
    ["Bronx", 4.58, orange],
    ["South Bronx", 3.64, red],
  ]);

  var options = {
    title: "American Human Development Index (0-10)",
    legend: { position: "none" },
    fontName: "Source Sans Pro",
    colors: [red, orange, pink, yellow, beige],
    height: chartHeight,
    // color: 'white',
    // backgroundColor: '#121212',
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("hdiChart")
  );
  chart.draw(data, options);
}
