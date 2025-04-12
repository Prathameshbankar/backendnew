require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const github_data = {
    "login": "Prathameshbankar",
    "id": 115609053,
    "node_id": "U_kgDOBuQN3Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/115609053?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Prathameshbankar",
    "html_url": "https://github.com/Prathameshbankar",
    "followers_url": "https://api.github.com/users/Prathameshbankar/followers",
    "following_url": "https://api.github.com/users/Prathameshbankar/following{/other_user}",
    "gists_url": "https://api.github.com/users/Prathameshbankar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Prathameshbankar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Prathameshbankar/subscriptions",
    "organizations_url": "https://api.github.com/users/Prathameshbankar/orgs",
    "repos_url": "https://api.github.com/users/Prathameshbankar/repos",
    "events_url": "https://api.github.com/users/Prathameshbankar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Prathameshbankar/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Prathamesh Bankar",
    "company": null,
    "blog": "https://my-portfolio-alpha-tan-79.vercel.app/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Developer",
    "twitter_username": "BankarPratham45",
    "public_repos": 16,
    "public_gists": 0,
    "followers": 31,
    "following": 32,
    "created_at": "2022-10-12T05:05:58Z",
    "updated_at": "2025-02-03T09:55:06Z"
    }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) =>{
    res.send("<h1>Hey what you are doing </h1>")
})

app.get('/github', (req, res)=>{
    res.json(github_data)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})