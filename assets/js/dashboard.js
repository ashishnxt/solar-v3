
  document.addEventListener('DOMContentLoaded', function() {
            // Generate chart data for current power
            const chartContainer = document.getElementById('powerChart');
            const days = 7;
            const barsPerDay = 3;
            
            for (let i = 0; i < days * barsPerDay; i++) {
                // Solar bar
                const solarHeight = Math.floor(Math.random() * 40) + 10;
                const solarBar = document.createElement('div');
                solarBar.className = 'bar solar-bar';
                solarBar.style.height = solarHeight + 'px';
                chartContainer.appendChild(solarBar);
                
                // Grid bar
                const gridHeight = Math.floor(Math.random() * 30) + 5;
                const gridBar = document.createElement('div');
                gridBar.className = 'bar grid-bar';
                gridBar.style.height = gridHeight + 'px';
                gridBar.style.marginRight = '15px';
                chartContainer.appendChild(gridBar);
            }
        });