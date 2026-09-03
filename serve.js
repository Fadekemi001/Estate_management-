const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static files from the current directory (or a subfolder like 'public')
app.use(express.static(__dirname));

// Optional: fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html')); // or your main entry point
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'resident_profile.html'));
});
app.get('/scan', (req, res) => {
  res.sendFile(path.join(__dirname, 'scan.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/vehicle-reg', (req, res) => {
  res.sendFile(path.join(__dirname, 'vehicle_registration.html'));
});
