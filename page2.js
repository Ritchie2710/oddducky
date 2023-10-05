function renderChart() {
  const duckys = JSON.parse(localStorage.getItem("duckys"));
  // get where we are going to put the chart
  const ctx = document.getElementById("myChart"); // context of the chart

  const labels = [];
  const views = [];
  const clicks = [];

  // loop through
  for (let i = 0; i < duckys.length; i++) {
    labels.push(duckys[i].name);
    views.push(duckys[i].views);
    clicks.push(duckys[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          type: "line",
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}
renderChart();
