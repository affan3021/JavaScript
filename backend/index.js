const express = require('express');
const app = express();
const port = process.env.PORT || 2005;

const api_data = {
  "login": "velourcodes",
  "id": 199387464,
  "node_id": "U_kgDOC-JpSA",
  "avatar_url": "https://avatars.githubusercontent.com/u/199387464?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/velourcodes",
  "html_url": "https://github.com/velourcodes",
  "followers_url": "https://api.github.com/users/velourcodes/followers",
  "following_url": "https://api.github.com/users/velourcodes/following{/other_user}",
  "gists_url": "https://api.github.com/users/velourcodes/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/velourcodes/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/velourcodes/subscriptions",
  "organizations_url": "https://api.github.com/users/velourcodes/orgs",
  "repos_url": "https://api.github.com/users/velourcodes/repos",
  "events_url": "https://api.github.com/users/velourcodes/events{/privacy}",
  "received_events_url": "https://api.github.com/users/velourcodes/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohammad Affan Siddiqi",
  "company": null,
  "blog": "",
  "location": "New Delhi, India",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2025-02-15T16:58:36Z",
  "updated_at": "2025-09-16T11:15:25Z"
}
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
});

app.get('/git-api', (req,res) =>
{
    res.json(api_data);
});

app.listen(port, () =>
{
    console.log(`Example app listening on port: ${port}`);
});

// NOTE: To stop the server from listening, press control+C in terminal (also used for hot reloading)