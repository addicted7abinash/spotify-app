const express = require("express");
const path = require("path");
const routes = require("./auth/authorization").router;
// import dotenv from dotenv.config()
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/posts', require('./routes/postRoutes'))
app.get("/auth", (req, res) => {
  const scope = "playlist-read-private playlist-read-collaborative";
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&scope=${scope}&redirect_uri=${process.env.REDIRECT_URI}`
  );
});
app.use("/oauth-callback", routes);
app.use("/posts", require("./routes/postRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
