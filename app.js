const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Project</title>
            <style>
                body { font-family: Arial; padding: 40px; }
                h1 { color: #333; }
            </style>
        </head>
        <body>
            <h1>Project is running! 🚀</h1>
            <p>Server is working. Now create your HTML files in the public folder.</p>
            <p>Add your index.html file to the public directory to replace this message.</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});