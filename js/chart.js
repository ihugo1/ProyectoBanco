//script del gráfico de barras
const ctx = document.getElementById('myChart');      
const myChart=new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Luz Eléctrica', 'Agua', 'Internet', 'Telefonía'],
    datasets: [{
      label: 'Servicios',
      data: [300, 100, 200, 200],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

