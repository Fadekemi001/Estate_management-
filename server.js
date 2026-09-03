const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Catch‑all route: send login.html for any unmatched request
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
