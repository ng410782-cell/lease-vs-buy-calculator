// Capital Budgeting Engine: Lease vs. Buy Multi-Factor Evaluator

function calculateEvaluator() {
    const segment = document.getElementById('entitySegment').value;
    const cost = parseFloat(document.getElementById('cost').value);
    const leasePay = parseFloat(document.getElementById('leasePay').value);
    const term = parseInt(document.getElementById('term').value);
    const subsidyPct = parseFloat(document.getElementById('subsidyType').value) / 100;
    const salvage = parseFloat(document.getElementById('salvage').value);
    const maintenance = parseFloat(document.getElementById('maintenance').value);
    const obsolescenceRisk = parseFloat(document.getElementById('obsolescenceRisk').value);
    const baseWacc = parseFloat(document.getElementById('wacc').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

    // Adjusted WACC accounting for Tech Obsolescence Risk
    const effectiveWacc = (baseWacc + obsolescenceRisk) / 100;

    // 1. Direct Subsidy Impact
    const subsidyAmount = cost * subsidyPct;
    const netInitialPurchaseCost = cost - subsidyAmount;

    // 2. Buy Model: Initial Outflow + Maintenance - Tax Shield on Dep & Maintenance - PV of Salvage
    const annualDepreciation = cost / term;
    const annualDepTaxShield = annualDepreciation * taxRate;
    const annualMaintNetOutflow = maintenance * (1 - taxRate);

    let npvPurchaseCost = netInitialPurchaseCost;

    for (let t = 1; t <= term; t++) {
        // Add Maintenance Outflow & Subtract Tax Shields
        const netYearlyOutflow = annualMaintNetOutflow - annualDepTaxShield;
        npvPurchaseCost += netYearlyOutflow / Math.pow(1 + effectiveWacc, t);
    }

    // Deduct PV of Salvage Value at term end (retained equity)
    const pvSalvage = salvage / Math.pow(1 + effectiveWacc, term);
    npvPurchaseCost -= pvSalvage;

    // 3. Lease Model: Rent Tax Shield (Assumes Operating Lease where Lessor covers Maintenance)
    const netAnnualLeaseOutflow = leasePay * (1 - taxRate);
    let npvLeaseCost = 0;

    for (let t = 1; t <= term; t++) {
        npvLeaseCost += netAnnualLeaseOutflow / Math.pow(1 + effectiveWacc, t);
    }

    // 4. Output Results & Breakdown
    document.getElementById('results').style.display = 'block';
    document.getElementById('netBuyCost').innerText = `₹${netInitialPurchaseCost.toLocaleString('en-IN')}`;
    document.getElementById('npvBuy').innerText = `₹${Math.round(npvPurchaseCost).toLocaleString('en-IN')}`;
    document.getElementById('npvLease').innerText = `₹${Math.round(npvLeaseCost).toLocaleString('en-IN')}`;
    document.getElementById('subsidyValue').innerText = `₹${subsidyAmount.toLocaleString('en-IN')}`;

    const recElement = document.getElementById('recommendation');
    const breakdownList = document.getElementById('factorBreakdown');
    breakdownList.innerHTML = '';

    if (npvPurchaseCost < npvLeaseCost) {
        recElement.innerText = `✓ Recommendation for ${segment}: PURCHASE EQUIPMENT`;
        recElement.style.color = "#22c55e";
    } else {
        recElement.innerText = `✓ Recommendation for ${segment}: LEASE EQUIPMENT`;
        recElement.style.color = "#38bdf8";
    }

    // Populate Key Factors
    const factors = [
        `<strong>Entity Framework:</strong> Configured for ${segment} (${segment === 'SME' ? 'Preserves working capital under AS 19' : 'Evaluates Right-of-Use Asset liabilities under Ind AS 116'}).`,
        `<strong>Capital Subsidy Benefit:</strong> Initial equipment acquisition cost reduced by ₹${subsidyAmount.toLocaleString('en-IN')} via selected scheme.`,
        `<strong>Salvage Equity Value:</strong> Retaining ₹${salvage.toLocaleString('en-IN')} residual value reduces net purchase cash outflow by ₹${Math.round(pvSalvage).toLocaleString('en-IN')} in present value terms.`,
        `<strong>Risk Adjustment:</strong> Effective WACC set to ${(effectiveWacc * 100).toFixed(1)}% reflecting technology obsolescence parameters.`
    ];

    factors.forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = text;
        breakdownList.appendChild(li);
    });
}
