import React, { useRef, useLayoutEffect } from "react";
import Chart from "chart.js";

const chartConfig = (legend, labels, data, ytitle, xtitle, min, max) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 0, 0, 170);
  gradientStroke.addColorStop(0, "#f7f7f7");
  gradientStroke.addColorStop(1, "#eae6f8");

  const chartOptions = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: legend,
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: "#10c83c",
          backgroundColor: gradientStroke,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              max: max,
              min: min,
              stepSize: 1,
            },
            scaleLabel: {
              display: true,
              labelString: ytitle,
            },
          },
        ],
        xAxes: [
          {
            offset: true,
            // type: "time",
            // time: {
            //   unit: "hour",
            // },
            gridLines: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString: xtitle,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  };

  return chartOptions;
};

const IntensityChart = (props) => {
  const chartContainer = useRef(null);

  useLayoutEffect(() => {
    new Chart(
      chartContainer.current,
      chartConfig(
        props.title,
        props.labels,
        props.data,
        props.ytitle,
        props.xtitle,
        props.min,
        props.max
      )
    );
  }, []);

  return (
    <canvas
      ref={chartContainer}
      id="myChart"
      style={{ height: "100%", maxWidth: "100%", padding: 0, margin: 0 }}
    />
  );
};

export default IntensityChart;
