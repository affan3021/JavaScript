const express = require('express');
const app = express();
const port = 2005;

app.get('/', (req,res) =>
{
    res.send("You are at Home Route, \n Hello from Velour Codes :)");
});

app.get('/youtube', (req,res) =>
{
    res.send('You are at YouTube route!')
});

app.get('/login', (req,res) =>
{
    res.send('You are at login route\nLogin to move ahead!');
});

app.get('/sumreen',(req,res) =>
{
    res.send('<h1>You are on the Sumreen route (dedicated to ammi)</h1>');
})

app.get('/affan', (req,res) =>
{
    res.send('<h1>Alhamduillah!</h1>');
})

app.listen(port, () =>
{
    console.log(`Example app listening on port: ${port}`);
});

// NOTE: To stop the server from listening, press control+C in terminal (also used for hot reloading)