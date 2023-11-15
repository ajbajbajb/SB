const aquaColorsNYU = [
  "#4bef79",
  "#62f18a",
  "#7af39c",
  "#91f5ad",
  "#a8f7be",
  "#c0f9d0",
  "#d7fbe1",
];
const mapBoxColorsNYU = ["#EB2A00", "#FF7658", "#FFA996", "#F4CA46"];

///////////////////////
///////////////////////

// 1. PREPARATION
// SVG
// defining shape and size of the chart(s). Good to be able to refer back to these.
const width = 600;
const height = 500;
const margin = 15;
const padding = 20;
const adj = 50;

///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////

// Pie Chart
(() => {})();

// TOOLTIPS
var ttip = d3
  .select("div#tooltip")
  .append("div")
  .attr("id", "ttip")
  .style("background", "#000")
  .attr("style", "position: absolute; opacity: 1;")
  .text("a simple tooooltip");

function handleMouseOver(d, data) {
  console.log(data);
  document.getElementById("ttip").style.opacity = 1;
  document.getElementById("ttip").style.top = event.clientY + "px";
  document.getElementById("ttip").style.left = event.clientX + 30 + "px";
  document.getElementById("ttip").innerHTML = "Hey, it's " + data.Region;
}
// function handleMouseOut(){
//     document.getElementById("ttip").style.opacity = 0;
// }
///////////////////////
var bronxBodegaData = [1, 22.5];
var uesBodegaData = [1, 5];
// PIE CHARTS!
var dataSource = "";
var bodegaPieSvg = d3
  .select("#bodegaRatioChart")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr(
    "viewBox",
    "-" + adj + " -" + adj + " " + (width + adj * 6) + " " + (height + adj * 3)
  )
  .style("padding", padding)
  .style("margin", margin)
  .style("padding-right", 2 * margin)
  .on("click", function () {
    if (dataSource === "ues") {
      bodegaPieChart(bronxBodegaData);
      dataSource = "bronx";
    } else {
      bodegaPieChart(uesBodegaData);
      dataSource = "ues";
    }
  });

function bodegaPieChart(data) {
  const g = bodegaPieSvg
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const radius = Math.min(width, height) / 2;

  const color = d3.scaleOrdinal(["#EB2A00", "#c0f9d0"]);

  const pie = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d;
    });

  const pies = g
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  arc = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(width / 10);

  pies
    .append("path")
    .attr("d", arc)
    .attr("fill", function (d) {
      return color(d);
    })
    .on("mouseover", function () {
      d3.select(this).transition().attr("fill", "white");
    })
    .on("mouseleave", function () {
      d3.select(this)
        .transition()
        .attr("fill", function (d) {
          return color(d);
        });
    })
    .exit()
    .remove();

  // labels

  pies
    .append("text")
    .classed("pieText", true)
    .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
    .text(["supermarket"]);

  bodegaPieSvg
    .append("text")
    .text("Supermarket to Bodega Ratio")
    .classed("chartTitle", true)
    .attr("x", width / 2)
    .attr("y", height + 10)
    .attr("text-anchor", "middle");
}
bodegaPieChart(uesBodegaData);

// we are appending SVG first
function popChart() {
  const populationSvg = d3
    .select("#populationSVG")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr(
      "viewBox",
      "-" +
        adj +
        " -" +
        adj +
        " " +
        (width + adj * 6) +
        " " +
        (height + adj * 3)
    )
    .style("padding", padding)
    .style("margin", margin)
    .style("padding-right", 2 * margin);

  // The first step – to correctly read the data.

  // DATA SECTION
  const timeConv = d3.timeParse("%Y");
  const datasetPop = d3.csv("data/popData.csv");
  datasetPop.then(function (data) {
    const slices = data.columns.slice(1).map(function (id) {
      return {
        id: id,
        values: data.map(function (d) {
          return {
            date: timeConv(d.Year),
            measurement: +d[id],
          };
        }),
      };
    });
    labels = data.columns.slice(1); // ajb's to label the lines correctly (if this is necessary)
    // console.log("Column headers", data.columns);
    // console.log("Column headers without date", data.columns.slice(1));
    // // returns the sliced dataset
    // console.log("Slices", slices);
    // // returns the first slice
    // console.log("First slice", slices[0]);
    // // returns the array in the first slice
    // console.log("A array", slices[0].values);
    // // returns the date of the first row in the first slice
    // console.log("Date element", slices[0].values[0].date);
    // // returns the array's length
    // console.log("Array length", (slices[0].values).length);
    // console.log("these are just the labels:" + labels[0]);

    // SCALES
    const xScale = d3.scaleTime().range([margin, width]); // (using margin) necessary two bits of code to move axis over
    const yScale = d3.scaleLinear().rangeRound([height, 0 + margin]);
    // specify input data Domain (i.e. this consists of all values
    // between a specified minimum and maximum that a data set can take)
    xScale.domain(
      d3.extent(data, function (d) {
        return timeConv(d.Year);
      })
    );
    yScale.domain([
      -2,
      d3.max(slices, function (c) {
        return d3.max(c.values, function (d) {
          return d.measurement + 4;
        }); // the guy added + 20 to leave room above the chart, though for us it doesn't matter since we're using percentage
      }),
    ]);

    // AXES̉̉̉̉
    const yaxis = d3
      .axisLeft()
      .scale(yScale)
      .tickFormat((d) => d + "%");
    const xaxis = d3.axisBottom().scale(xScale);

    // LINES
    const line = d3
      .line()
      .x(function (d) {
        return xScale(d.date);
      }) // this broke the while thing! I didn't look at the array and see that the value is listed as 'date', i was going off Year still
      .y(function (d) {
        return yScale(d.measurement);
      })
      .curve(d3.curveMonotoneX);

    // let id = 0; // a little bit of code to create a counter that increments everytime we label a line (this should be kept within this graph's scope)
    // const ids = function () {
    //     return "line-" + id++;
    // }
    let id = 0; // a little bit of code to create a counter that increments everytime we label a line (this should be kept within this graph's scope)

    // 2. DRAWING
    // TEXT LABEL
    // ugly as sin little '%' symbol
    // populationSvg.append("text")
    //     .attr("transform", "translate(0, 0)")
    //     .attr("y", (height/2))
    //     .attr("x", (0 - (1.5*margin)))
    //     .style("text-anchor", "middle")
    //     .style('font-size', '120%')
    //     .style('fill', 'white')
    //     .text("%");
    // TITLE
    populationSvg
      .append("text")
      .attr("x", width / 3)
      .attr("y", 0)
      .attr("class", "chartTitle")
      .attr("text-decoration", "none")
      .text("Population Change in The Bronx")
      .style("fill", "white");

    // AXES
    populationSvg
      .append("g")
      .attr("class", "axisWhite")
      .attr("transform", "translate(0," + height + ")")
      .call(xaxis);

    populationSvg
      .append("g")
      .attr("class", "axisWhite")
      .attr("transform", "translate(" + margin + ", " + 0 + ")") // necessary two bits of code to move axis over
      .call(yaxis);

    // LINES

    const lines = populationSvg
      .selectAll("lines")
      .data(slices)
      .enter()
      .append("g");

    lines
      .append("path")
      .attr("class", function (c) {
        return "line-" + id++;
      })
      .attr("d", function (d) {
        return line(d.values);
      });

    lines
      .append("text")
      .classed("series_label", true)
      .datum(function (d) {
        return {
          id: d.id,
          value: d.values[d.values.length - 1],
        };
      })
      .attr("transform", function (d) {
        return (
          "translate(" +
          (xScale(d.value.date) + 10) +
          "," +
          (yScale(d.value.measurement) + 5) +
          ")"
        );
      })
      .attr("x", 5)
      .text(function (d) {
        return d.id;
      });
  });
}
popChart();

function HDIBar() {
  const svgHDIBar = d3
    .select("div#HDIBarChart")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-" + adj + " -" + adj + " " + 680 + " " + 700)
    .style("padding", padding)
    .style("margin", margin)
    .classed("svg-content", true);

  // TITLE
  svgHDIBar
    .append("text")
    .attr("x", width / 2)
    .attr("y", 0 - margin.top / 2)
    .attr("text-anchor", "middle")
    .style("padding-bottom", "10px")
    .attr("class", "chartTitle")
    .text("Human Development Index (0-10)");

  datasetHDI = d3.csv("data/hdi.csv");
  datasetHDI.then(function (data) {
    // console.log(data)

    // X axis
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(
        data.map(function (d) {
          return d.borough;
        })
      )
      .padding(0.2);

    svgHDIBar
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleLinear().domain([2.5, 9]).range([height, 20]); // 20 so that there's a gap between the title and the top of the chart
    svgHDIBar.append("g").call(d3.axisLeft(y));

    // colors
    // here we're applying a categorical/ordinal scale to the colors and mapping them. it looks bad.
    var myColor = d3
      .scaleLinear()
      .domain([3.4, 7])
      .range(["#EB2A00", "#FFA996"]);

    // Bars
    svgHDIBar
      .selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.borough);
      })
      .attr("y", function (d) {
        return y(d.index) - 1;
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(d.index);
      })
      .attr("fill", function (d) {
        return myColor(d.index);
      });
  });
}
HDIBar();
// Bar chart for Closed Services
function closedBar() {
  const svgClosedBar = d3
    .select("div#closedBarChart")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-" + adj + " -" + adj + " " + 680 + " " + 700)
    .style("padding", padding)
    .style("margin", margin)
    .classed("svg-content", true);

  // TITLE
  svgClosedBar
    .append("text")
    .attr("x", width / 2)
    .attr("y", 0 - margin.top / 2)
    .attr("text-anchor", "middle")
    .style("padding-bottom", "10px")
    .attr("class", "chartTitle")
    .text("Number of Closed Service Centers");

  datasetClosed = d3.csv("data/drawClosedFoodProvsChart.csv");
  datasetClosed.then(function (data) {
    // console.log(data)

    // X axis
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(
        data.map(function (d) {
          return d.Borough;
        })
      )
      .padding(0.2);

    svgClosedBar
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 50]).range([height, 20]); // 20 so that there's a gap between the title and the top of the chart
    svgClosedBar.append("g").call(d3.axisLeft(y));

    // colors
    // here we're applying a categorical/ordinal scale to the colors and mapping them. it looks bad.
    var myColor = d3
      .scaleLinear()
      .domain([50, 30])
      .range(["#EB2A00", "#FFA996"]);

    // Bars
    svgClosedBar
      .selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.Borough);
      })
      .attr("y", function (d) {
        return y(d.Closed) - 1;
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(d.Closed);
      })
      .attr("fill", function (d) {
        return myColor(d.Closed);
      });
  });
}
closedBar();
// Income Bar Chart
function incomeBar() {
  const svgIncomeBar = d3
    .select("div#incomeBarChart")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr(
      "viewBox",
      "-" +
        adj +
        " -" + // ajb's wacky adjustments to give a little space
        adj +
        " " +
        680 +
        " " +
        700
    )
    .style("padding", padding)
    .style("margin", margin)
    .classed("svgIncomeBarChart", true);

  // TITLE TEXT

  svgIncomeBar
    .append("text")
    .attr("x", width / 2)
    .attr("y", 0 - margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("padding-bottom", "10px")
    .attr("class", "chartTitle")
    .text("Average Income 2021 (US$)");

  datasetIncome = d3.csv("data/incomeData.csv");
  datasetIncome.then(function (data) {
    // console.log(data) // JUST TO CHECK WHAT'S COMING THROUGH
    data.Income = parseInt(data.Income);

    // X axis
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(
        data.map(function (d) {
          return d.Region;
        })
      )
      .padding(0.2);

    svgIncomeBar
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,5)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    // console.log(d3.max(data, function (d) { return d.Income;})) // just to see how the d3.max needs to work with integers. The CSV is a string, but javascript is normally fine with running arithmetic on them (because it's dynamically typed)
    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return +d.Income;
        }),
      ]) // to go up to max of y axis
      .range([height, 2 * margin]);

    svgIncomeBar
      .append("g")
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format("$0.2s")));
    // had issues with this, but the point is to enclose the tickFormats WITHIN the
    // d3.axisLeft call. Notice the blue bracket.

    // colors
    // here we're applying a categorical/ordinal scale to the colors and mapping them. it looks bad.
    var clr = d3
      .scaleLinear()
      .domain([
        20000,
        d3.max(data, function (d) {
          return +d.Income;
        }) - 20000,
      ])
      .range(["#EB2A00", "#FFA996"]);

    // Bars
    svgIncomeBar
      .selectAll("svgIncomeBar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.Region);
      })
      .attr("y", function (d) {
        return y(d.Income) - 1;
      })
      .attr("width", x.bandwidth())
      .attr("fill", function (d) {
        return clr(d.Income);
      })
      .attr("height", function (d) {
        return height - y(d.Income);
      })
      .on("mousemove", function (d, data) {
        document.getElementById("ttip").style.top = event.clientY + "px";
        document.getElementById("ttip").style.left = event.clientX + "px";
        document.getElementById("ttip").innerHTML =
          data.Region + "<br>" + data.Income;
        // console.log(data.Region);
      });
  });
}
incomeBar();
// Poverty Bar Chart

function povertyBar() {
  const povertyBar = d3
    .select("div#povertyBarChart")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", " -" + adj + " -" + adj + " " + 680 + " " + 700)
    .style("padding", padding)
    .style("margin", margin)
    .classed("svg-content", true);

  povertyData = d3.csv("data/povertyData.csv");
  povertyData.then(function (data) {
    // console.log(data)
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(
        data.map(function (d) {
          return d.Borough;
        })
      )
      .padding(0.2);

    povertyBar
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,5)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis

    var y = d3
      .scaleLinear()
      .domain([0, 50]) // to go up to max of y axis
      .range([height, 2 * margin]); // to add a buffer

    povertyBar.append("g").call(
      d3
        .axisLeft(y)
        .ticks(5)
        .tickFormat((d) => d + "%")
    ); // little function to add a % sign after each number

    // colors
    var clr = d3
      .scaleLinear()
      .domain([
        d3.max(data, function (d) {
          return +d.Percent;
        }),
        15,
      ])
      .range(["#EB2A00", "#FFA996"]);
    // Bars
    povertyBar
      .selectAll("povertyBarChart")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.Borough);
      })
      .attr("y", function (d) {
        return y(d.Percent);
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(d.Percent);
      })
      .attr("fill", function (d) {
        return clr(d.Percent);
      })
      .on("mousemove", function (d, data) {
        document.getElementById("ttip").style.top = event.clientY + "px";
        document.getElementById("ttip").style.left = event.clientX + "px";
        document.getElementById("ttip").innerHTML =
          data.Borough + "<br>" + data.Percent;
        // console.log(data.Region);
      });
    // title
    povertyBar
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .attr("class", "chartTitle")
      .text("Poverty Percentage");

    // title
    // povertyBar.append('text')
    //     .attr('x', 0 - margin)
    //     .text('%')
  });
}
povertyBar();
