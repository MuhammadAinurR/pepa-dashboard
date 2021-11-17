// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Nunito'), '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById('chartMahasiswaAsing');
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Jumlah Dosen Tetap', 'Jumlah Mahasiswa'],
    datasets: [
      {
        data: [722, 10291],
        backgroundColor: ['#1cc88a', '#2bb9c3'],
        hoverBackgroundColor: ['#17a673', '#1e8188'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});
