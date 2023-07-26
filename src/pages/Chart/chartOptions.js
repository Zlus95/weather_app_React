export const getChartOptions = ({ categories, max, min }) => ({
  chart: {
    type: "spline",
    backgroundColor: "#424242",
    color: "red",
  },
  title: {
    text: "Температура (°C)",
    style: {
      color: "white",
      fontWeight: "500",
      fontSize: "20px",
    },
  },
  legend: {
    itemStyle: {
      color: "white",
      fontWeight: "400",
      fontSize: "13px",
    },
  },
  xAxis: {
    lineColor: "white",
    tickColor: "white",
    categories: categories,
    labels: {
      style: {
        color: "white",
        font: "15px Trebuchet MS, Verdana, sans-serif",
      },
    },
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      style: {
        color: "white",
        font: "15px Trebuchet MS, Verdana, sans-serif",
      },
    },
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: "#666666",
        lineWidth: 1,
      },
    },
    borderColor: "transparent",
    maxPointWidth: 40,
    stacking: "normal",
  },
  series: [
    {
      name: "Макс.",
      marker: {
        symbol: "square",
      },
      data: max,
    },
    {
      name: "Мин.",
      marker: {
        symbol: "diamond",
      },
      data: min,
    },
  ],
  credits: {
    enabled: false,
  },
  colors: ["#FFF263", "#058DC7"],
});
