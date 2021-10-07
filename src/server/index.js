const express = require("express");
const routes = require("./routes");
const path = require("path");

const publicweb = path.resolve("dist", "publicweb");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.PORT || "3000";
app.listen(port, () => console.log(`API running on localhost:${port}`));
