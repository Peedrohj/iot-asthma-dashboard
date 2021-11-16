import React, { useRef, useLayoutEffect } from "react";
import Chart from "chart.js";

const chartConfig = (legend, labels, data, ytitle, xtitle) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 0, 0, 170);
  gradientStroke.addColorStop(0, "#f7f7f7");
  gradientStroke.addColorStop(1, "#eae6f8");

  const chartOptions = {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          label: legend,
          data: data,
          backgroundColor: ["#A3C744", "#8ABADC", "#EAC91B", "#CA1E3D"],
        },
      ],
    },
    options: {
      legend: {
        // display: false,
        position: "right",
      },
    },
  };

  return chartOptions;
};

const IncidenceChart = (props) => {
  const chartContainer = useRef(null);

  useLayoutEffect(() => {
    new Chart(
      chartContainer.current,
      chartConfig(
        props.title,
        props.labels,
        props.data,
        props.ytitle,
        props.xtitle
      )
    );
  }, []);

  return (
    <canvas
      ref={chartContainer}
      id="myChart"
      style={{ height: "100%", maxWidth: "100%" }}
    />
  );
};

export default IncidenceChart;
