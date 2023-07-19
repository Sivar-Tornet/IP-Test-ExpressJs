const express = require('express');
const app = express();

// Middleware to get client IP address
app.use((req, res, next) => {
  // const clientIp = req.ip; // Express provides the client's IP in the 'req.ip' property
  const clientIp = req.header('x-forwarded-for');
  res.send(`Your IP address is: ${clientIp}`);
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

