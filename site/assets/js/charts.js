(function(){
  if (!window.Chart) return;
  const green = '#005F40';
  const yellow = '#AE962C';
  const text = '#f4f7f5';
  const grid = 'rgba(255,255,255,0.08)';

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { color: grid }, ticks: { color: text } },
      y: { grid: { color: grid }, ticks: { color: text } }
    },
    plugins: {
      legend: { labels: { color: text } },
      tooltip: { backgroundColor: '#0b130f', titleColor: text, bodyColor: text, borderColor: grid, borderWidth: 1 }
    }
  };

  const leadsCtx = document.getElementById('leadsChart');
  if (leadsCtx) {
    new Chart(leadsCtx, {
      type: 'line',
      data: {
        labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
        datasets: [
          { label: 'Leads', data: [18,22,21,28,35,42,46,52,60,66,78,84], borderColor: green, backgroundColor: 'rgba(0,95,64,0.25)', tension: 0.35, fill: true }
        ]
      },
      options: baseOptions
    });
  }

  const roasCtx = document.getElementById('roasChart');
  if (roasCtx) {
    new Chart(roasCtx, {
      type: 'bar',
      data: {
        labels: ['Google Ads','Meta Ads','LinkedIn','SEO'],
        datasets: [
          { label: 'ROAS', data: [4.2, 3.6, 3.1, 5.4], backgroundColor: [green, green, green, yellow], borderRadius: 6 }
        ]
      },
      options: {
        ...baseOptions,
        scales: { x: { grid: { display: false }, ticks: { color: text } }, y: { grid: { color: grid }, ticks: { color: text }, suggestedMin: 0, suggestedMax: 6 } }
      }
    });
  }

  const trafficCtx = document.getElementById('trafficChart');
  if (trafficCtx) {
    new Chart(trafficCtx, {
      type: 'doughnut',
      data: {
        labels: ['SEO','Ads','Direkt','Referral'],
        datasets: [{ data: [46, 34, 12, 8], backgroundColor: [yellow, green, '#44665a', '#8a7a4a'], borderWidth: 0 }]
      },
      options: {
        plugins: { legend: { position: 'bottom', labels: { color: text } } }
      }
    });
  }
})();