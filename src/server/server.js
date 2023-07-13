const express = require("express");
const app = express();
const port = 3001;
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/search",
    clientId: "4b558a0f256441e8a8f8e7f9392e5726",
    clientSecret: "33c499ad6bb54915932ebb2ba8b81548",
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });

      // spotifyApi.setAccessToken(data.body['access_token']);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  // console.log(req.body);
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/search",
    clientId: "4b558a0f256441e8a8f8e7f9392e5726",
    clientSecret: "33c499ad6bb54915932ebb2ba8b81548",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
      console.log(data.body);
      console.log(data.body.access_token);
      console.log(data.body.refresh_token);
      console.log(data.body.expires_in);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});