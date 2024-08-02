const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use('/assets', express.static(__dirname + '/assets'));


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
