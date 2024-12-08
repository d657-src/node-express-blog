import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("/home/ddd/coding/blog/views/index.ejs");
});

let allposts = [];
app.post("/submit", (req, res) => {
  allposts.push(req.body["newPost"]);
  res.render("/home/ddd/coding/blog/views/index.ejs", { posts: allposts });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});