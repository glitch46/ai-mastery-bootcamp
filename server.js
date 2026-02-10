const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve views
app.use('/views', express.static(path.join(__dirname, 'views')));

// Serve data files
app.use('/data', express.static(path.join(__dirname, 'data')));

// Dashboard route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard', 'index.html'));
});

// Legacy support for old dashboard path
app.get('/learn', (req, res) => {
    res.redirect('/');
});

// Games routes
app.get('/games/terminal-velocity', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'terminal-velocity', 'index.html'));
});

app.get('/games/prompt-escape-rooms', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'prompt-escape-rooms', 'index.html'));
});

app.get('/games/copy-pasta-chef', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'copy-pasta-chef', 'index.html'));
});

app.get('/games/error-quest', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'error-quest', 'index.html'));
});

app.get('/games/prompt-battles', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'prompt-battles', 'index.html'));
});

app.get('/games/build-races', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'build-races', 'index.html'));
});

app.get('/games/ai-tool-olympics', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'ai-tool-olympics', 'index.html'));
});

app.get('/games/architects-blueprint', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'architects-blueprint', 'index.html'));
});

// Games hub
app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'games', 'index.html'));
});

// Curriculum routes
app.get('/curriculum', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'curriculum', 'index.html'));
});

app.get('/curriculum/week:week/day:day', (req, res) => {
    const { week, day } = req.params;
    const filePath = path.join(__dirname, 'views', 'curriculum', `week${week}`, `day${day}.html`);
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Lesson not found');
    }
});

// API endpoint to load JSON data files
app.get('/api/data/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'data', filename);
    
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ error: 'Data file not found' });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 AI MASTERY BOOTCAMP - "From Zero to Shipped"\n`);
    console.log(`   Server running on http://localhost:${PORT}`);
    console.log(`\n📚 Routes:`);
    console.log(`   Dashboard:         http://localhost:${PORT}/`);
    console.log(`   Games Hub:         http://localhost:${PORT}/games`);
    console.log(`   Terminal Velocity: http://localhost:${PORT}/games/terminal-velocity`);
    console.log(`   Escape Rooms:      http://localhost:${PORT}/games/prompt-escape-rooms`);
    console.log(`   Copy Pasta Chef:   http://localhost:${PORT}/games/copy-pasta-chef`);
    console.log(`\n💡 "Stop learning to code. Start learning to create."\n`);
});
