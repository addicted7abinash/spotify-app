const asyncHandler = require("express-async-handler");
const axios = require("axios");
const qs = require("qs");
const token = require("../auth/authorization").token;

const getPlaylists = asyncHandler(async (req, res) => {
  const data = qs.stringify({
    limit: 10,
    offset: 0,
  });

  const config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/playlists",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  };
  const playlist = await axios(config);
  res.status(200).json(playlist);
});

module.exports = { getPlaylists };
