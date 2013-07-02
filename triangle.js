(function () {

  "use strict";

  var root = this;
  var triangle = {"__version__": "0.0.1"};

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports)
      exports = module.exports = triangle;
    exports.triangle = triangle;
  } else root.triangle = triangle;

  triangle.ScatterPlot = function () {

    // Defaults.
    var x = function (d) { return d[0]; },
        y = function (d) { return d[1]; },
        width = 200,
        height = 200,
        margin = {top: 10, right: 10, bottom: 10, left: 10},
        xlim = null,
        ylim = null;

    var scatter = function (selection) {
      selection.each(function (data) {

        var el = d3.select(this);

        // Compute the data limits.
        var xl = xlim, yl = ylim;
        if (xlim === null) xl = d3.extent(data, x);
        if (ylim === null) yl = d3.extent(data, y);

        // Set up the scales.
        var xscale = d3.scale.linear().domain(xl)
                       .range([0, width-margin.left-margin.right]),
            yscale = d3.scale.linear().domain(yl)
                       .range([height-margin.top-margin.bottom, 0]);

        // Set up the base SVG element.
        var svg = el.selectAll("svg").data([data]);
        svg.enter().append("svg");
        svg.attr("width", width).attr("height", height);

        // Build the axes group element.
        var axes = svg.selectAll("g.axes").data([data]);
        axes.enter().append("g").attr("class", "axes");
        axes.attr("transform", "translate("+margin.left+","+margin.top+")");

        // Plot the data points.
        console.log(data);
        var points = axes.selectAll("circle.datapoint").data(data);
        points.enter().append("circle").attr("class", "datapoint");
        points.attr("cx", function() {
                return xscale(x.apply(this, arguments));
              })
              .attr("cy", function(d) {
                return yscale(y.apply(this, arguments));
              })
              .attr("r", 2);
        points.exit().remove();

        axes.exit().remove();
        svg.exit().remove();

      });
    };

    scatter.x = function (_) {
      if (!arguments.length) return x;
      x = _;
      return scatter;
    };

    scatter.y = function (_) {
      if (!arguments.length) return y;
      y = _;
      return scatter;
    };

    scatter.width = function (_) {
      if (!arguments.length) return width;
      width = _;
      return scatter;
    };

    scatter.height = function (_) {
      if (!arguments.length) return height;
      height = _;
      return scatter;
    };

    scatter.margin = function (_) {
      if (!arguments.length) return margin;
      margin = _;
      return scatter;
    };

    scatter.margin.top = function (_) {
      if (!arguments.length) return margin.top;
      margin.top = _;
      return scatter;
    };

    scatter.margin.right = function (_) {
      if (!arguments.length) return margin.right;
      margin.right = _;
      return scatter;
    };

    scatter.margin.bottom = function (_) {
      if (!arguments.length) return margin.bottom;
      margin.bottom = _;
      return scatter;
    };

    scatter.margin.left = function (_) {
      if (!arguments.length) return margin.left;
      margin.left = _;
      return scatter;
    };

    scatter.xlim = function (_) {
      if (!arguments.length) return xlim;
      xlim = _;
      return scatter;
    };

    scatter.ylim = function (_) {
      if (!arguments.length) return ylim;
      ylim = _;
      return scatter;
    };

    return scatter;

  };

  triangle.CornerPlot = function (selection) {



  };

}).call(this);
