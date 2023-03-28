import { createChart, updateChart } from "./scatterplot.js";

// CSV Data inladen met Papi
function loadData() {
  Papa.parse("./data/cars.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (results) => checkData(results.data),
  });
}

// Checkt of inladen van CSV goed is gegaan
function checkData(data) {
  console.table(data);
  // Met een scatterplot kun je allen x en y waarden doorgeven
  const chartdata = data.map((car) => ({
    x: car.horsepower,
    y: car.mpg,
  }));
  console.log(chartdata);
  // chartjs aanmaken
  createChart(chartdata, "Horsepower", "MPG");
}

loadData();
