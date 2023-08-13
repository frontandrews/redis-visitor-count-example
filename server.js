
const express = require('express');
const { createClient } = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;

const client = createClient();

const VISITOR_KEY = 'visitor_count';

client.on('connect', function() {
    console.log('Connected to Redis server.');

    const server = app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });

    //  Shutdown
    process.on('SIGINT', async function() {
        console.log('\nshutting down from SIGINT (Ctrl-C)');
        await client.quit();
        server.close(() => {
            process.exit(0);
        });
    });
});

client.on('error', err => console.log('Redis Client Error', err));

app.get('/', async (req, res) => {
    try {
        const count = await client.incr(VISITOR_KEY);
        res.send(`Visitor count: ${count}`);
    } catch (err) {
        console.error('Redis error:', err);
        res.status(500).send('Error fetching visitor count');
    }
});

client.connect();
