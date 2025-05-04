// script.js
document.getElementById('solar-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Read inputs
    const bill = parseFloat(document.getElementById('bill').value);
    const roofType = document.getElementById('roofType').value;
    const area = parseFloat(document.getElementById('area').value);
    const sunHours = parseFloat(document.getElementById('sunHours').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value) / 100;
    const subsidy = document.getElementById('subsidy').checked;
  
    // Calculation constants
    const avgRatePerUnit = 6;      // ₹ per kWh
    const costPerWatt     = 60;     // ₹ per watt installed
    const subsidyFactor   = subsidy ? 0.85 : 1;  // 15% discount if eligible
  
    // Compute required system size (W)
    const monthlyUnits = bill / avgRatePerUnit;
    let systemSizeW = (monthlyUnits / (sunHours * 30)) * 1000 / efficiency;
  
    // Cap by available roof area (≈15W per sq.ft)
    const maxSizeByArea = area * 15;
    systemSizeW = Math.min(systemSizeW, maxSizeByArea);
  
    // Estimate cost & round to nearest ₹1,000
    let estimatedCost = systemSizeW * costPerWatt * subsidyFactor;
    estimatedCost = Math.round(estimatedCost / 1000) * 1000;
  
    // Display result
    document.getElementById('costValue').innerText = `₹${estimatedCost.toLocaleString()}`;
    document.getElementById('result').classList.remove('hidden');
  });
  