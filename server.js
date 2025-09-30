const express = require('express');
const app = express();
const port = 3000;

// Tableau de citations
const quotes = [
  "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
  "Le succès, c’est tomber sept fois et se relever huit.",
  "Fais de ta vie un rêve, et d'un rêve, une réalité.",
  "Crois en toi et tout devient possible."
];

app.get('/', (req, res) => {
  // Sélection aléatoire d'une citation
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(`<h1>💡 Citation du jour</h1><p>${randomQuote}</p>`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
