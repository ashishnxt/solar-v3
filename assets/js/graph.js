(function () {
    document.addEventListener('DOMContentLoaded', function () {
      const traditional = document.getElementById('traditional-bar-ssw');
      const solar = document.getElementById('solar-bar-ssw');
      const totalSavingsEl = document.getElementById('total-savings-ssw');

      const years = 7;
      let totalSavings = 42800;

      for (let i = 1; i <= years; i++) {
        const yearLabel = Math.round(i * 2.5);
        const price = Math.round(200 * (1 + (Math.pow(1.06, yearLabel) - 1)));
        const height = Math.min(500, 20 + yearLabel * 15);

        const barGroup = document.createElement('div');
        barGroup.className = 'bar-group-ssw';

        const bar = document.createElement('div');
        bar.className = 'bar-ssw traditional-bar';
        bar.style.height = height + 'px';

        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = yearLabel + ' yrs';

        barGroup.appendChild(bar);
        barGroup.appendChild(label);
        traditional.appendChild(barGroup);

        const decline = yearLabel * 15;
        const solarHeight = Math.max(20, 300 - decline);

        const solarBarGroup = document.createElement('div');
        solarBarGroup.className = 'bar-group-ssw';

        const solarBar = document.createElement('div');
        solarBar.className = 'bar-ssw solar-bar';
        solarBar.style.height = solarHeight + 'px';

        const solarLabel = document.createElement('div');
        solarLabel.className = 'bar-label';
        solarLabel.textContent = yearLabel + ' yrs';

        solarBarGroup.appendChild(solarBar);
        solarBarGroup.appendChild(solarLabel);
        solar.appendChild(solarBarGroup);
      }

      const animateSavings = () => {
        let current = 0;
        const step = totalSavings / 50;
        const interval = setInterval(() => {
          current += step;
          if (current >= totalSavings) {
            clearInterval(interval);
            current = totalSavings;
          }
          totalSavingsEl.textContent = Math.round(current).toLocaleString();
        }, 30);
      };

      setTimeout(animateSavings, 500);
    });
  })();
