// Market Trends Chart
const marketCtx = document.getElementById('marketTrends').getContext('2d');
new Chart(marketCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Market Trends',
            data: [120, 150, 180, 220, 200, 240],
            borderColor: '#00b894',
            backgroundColor: 'rgba(0, 184, 148, 0.1)',
            borderWidth: 2,
        }]
    }
});

// Sector Performance Chart
const sectorCtx = document.getElementById('sectorPerformance').getContext('2d');
new Chart(sectorCtx, {
    type: 'bar',
    data: {
        labels: ['Tech', 'Finance', 'Healthcare', 'Energy'],
        datasets: [{
            label: 'Sector Performance',
            data: [20, 15, 10, 25],
            backgroundColor: ['#00b894', '#0984e3', '#d63031', '#6c5ce7'],
            borderWidth: 1,
        }]
    }
});
