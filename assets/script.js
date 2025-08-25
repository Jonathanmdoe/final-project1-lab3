/* Basic chart placeholder */
document.addEventListener('DOMContentLoaded', () => {
  // Segmented controls
  document.querySelectorAll('.segmented').forEach(segment => {
    segment.addEventListener('click', (e) => {
      const button = e.target.closest('.segmented__btn');
      if (!button) return;
      segment.querySelectorAll('.segmented__btn').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Chart
  const ctx = document.getElementById('salesChart');
  if (!ctx) return;
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jum', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7'],
      datasets: [{
        label: 'Mauzo',
        data: [0,0,0,0,0,0,0],
        borderColor: '#184d11',
        backgroundColor: 'rgba(24,77,17,.15)',
        borderWidth: 2,
        fill: true,
        tension: .35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,.08)' } },
        x: { grid: { display:false } }
      },
      plugins: { legend: { display: false } }
    }
  });
});

