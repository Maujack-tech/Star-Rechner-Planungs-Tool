// Preisliste für Waren je nach Stadt/Raumstation
const prices = {
    "Lorville": { "Titanium": 7.00, "Laranite": 25.00, "Agricium": 8.50, "Gold": 4.00 },
    "Area18": { "Titanium": 7.20, "Laranite": 26.00, "Agricium": 8.70, "Gold": 4.10 },
    "New Babbage": { "Titanium": 6.80, "Laranite": 24.50, "Agricium": 8.30, "Gold": 3.90 },
    "Orison": { "Titanium": 7.10, "Laranite": 25.50, "Agricium": 8.60, "Gold": 4.05 },
    "Port Tressler": { "Titanium": 6.90, "Laranite": 25.00, "Agricium": 8.50, "Gold": 4.00 },
    "Everus Harbor": { "Titanium": 7.00, "Laranite": 25.20, "Agricium": 8.40, "Gold": 4.15 },
    "Bajini Point": { "Titanium": 7.05, "Laranite": 25.30, "Agricium": 8.55, "Gold": 4.20 },
    "Grim Hex": { "Titanium": 6.85, "Laranite": 24.70, "Agricium": 8.45, "Gold": 4.10 }
};

// Schiffs-Kapazitäten
const shipCapacities = {
    "Aurora MR": 20,
    "Cutlass Black": 30,
    "Constellation Andromeda": 108,
    "Caterpillar": 288,
    "Crusader Mercury Star Runner": 164,
    "Freelancer MAX": 120,
    "Vulture": 36
    // MSR wurde entfernt
    // Weitere Schiffe können hier hinzugefügt werden
};

function calculateRoute() {
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;
    const commodity = document.getElementById('commodity').value;
    const ship = document.getElementById('ship').value;

    if (!fromLocation || !toLocation || !commodity || !ship) {
        alert("Bitte wählen Sie alle Felder aus.");
        return;
    }

    if (!prices[fromLocation] || !prices[toLocation] || !shipCapacities[ship]) {
        alert("Ungültiger Ort oder Schiff ausgewählt.");
        return;
    }

    const fromPrice = prices[fromLocation][commodity] || 0;
    const toPrice = prices[toLocation][commodity] || 0;
    const shipCapacity = shipCapacities[ship] || 0;

    // Berechnung des Kaufpreises und des Gewinns
    const costPrice = fromPrice;
    const sellPrice = toPrice;
    const quantity = shipCapacity;
    const totalCost = (costPrice * quantity).toFixed(2);
    const totalRevenue = (sellPrice * quantity).toFixed(2);
    const profit = (totalRevenue - totalCost).toFixed(2);

    // Dummy Berechnung der Zeit
    const travelTime = "1 Stunde 30 Minuten"; // Dies sollte durch eine echte Berechnung ersetzt werden

    const resultBox = document.getElementById('result');
    resultBox.innerHTML = `
        <strong>Berechnung für ${commodity} von ${fromLocation} nach ${toLocation}:</strong><br>
        <strong>Schiff:</strong> ${ship} (Kapazität: ${shipCapacity} SCU)<br>
        <strong>Kaufpreis:</strong> ${costPrice} UEC pro Einheit<br>
        <strong>Verkaufspreis:</strong> ${sellPrice} UEC pro Einheit<br>
        <strong>Gesamtkosten:</strong> ${totalCost} UEC<br>
        <strong>Gesamterlös:</strong> ${totalRevenue} UEC<br>
        <strong>Profit:</strong> ${profit} UEC<br>
        <strong>Reisezeit:</strong> ${travelTime}
    `;
}
