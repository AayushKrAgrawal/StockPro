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
        }]
    }
});

// Nifty Trends Chart
const niftyCtx = document.getElementById('niftyTrends').getContext('2d');
new Chart(niftyCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'NIFTY 50 Trends',
            data: [17500, 18000, 18500, 19000, 18500, 19200],
            borderColor: '#00b894',
            backgroundColor: 'rgba(0, 184, 148, 0.1)',
        }]
    }
});

// Indian Sector Performance
const sectorIndiaCtx = document.getElementById('sectorPerformanceIndia').getContext('2d');
new Chart(sectorIndiaCtx, {
    type: 'bar',
    data: {
        labels: ['IT', 'Pharma', 'Auto', 'Finance'],
        datasets: [{
            label: 'Indian Sector Performance',
            data: [25, 15, 20, 30],
            backgroundColor: ['#00b894', '#d63031', '#0984e3', '#6c5ce7'],
        }]
    }
});

// Form Toggle
const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

showLogin.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

showSignup.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});
