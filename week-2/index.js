// import bodyParser from "body-parser";
const express = require("express");
const { writeFile, readFile, readdir } = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all todo notes
app.get("/todos", (req, res) => {
  readFileSync("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

//get user notes by id
app.get("/todos/:id", (req, res) => {
  const id1 = parseInt(req.params.id);

  const data = readFileSync("data.json", "utf-8", (err) => {
    if (err) throw err;
  });
  const parseData = JSON.parse(data);
  const todo = parseData.find((t) => t.id === id1);
  if (!todo) {
    res.status(404).send("not found");
  } else {
    res.json(todo);
  }
});

app.post("/todos", (req, res) => {
  const newtodo = {
    id: Math.floor(Math.random() * 10000),
    title: req.body.title,
    desc: req.body.desc,
  };
  // console.log(newtodo);
  readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    const parseData = JSON.parse(data);
    parseData.push({
      newtodo,
    });
    writeFile("data.json", JSON.stringify(parseData), (err) => {
      if (err) throw err;
      res.status(201).json(newtodo);
    });
  });
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    let item = parsedData.findIndex((x) => x.id == id);
    if (!item) {
      res.status(404).send("not found");
    } else {
      const updatedTodo = {
        id: parsedData[item].id,
        title: req.body.title || data.title,
        desc: req.body.desc || data.desc,
      };
    }
    parsedData[item] = updatedTodo;
    console.log(item);
    writeFile("data.json", JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.status(200).json(updatedTodo);
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    const parseData = JSON.parse(data);
    const item = parseData.findIndex((x) => x.id === id);
    if (!item) {
      res.status(404).status("not found");
    }
    //remove item
    parseData.splice(item, 1);
    writeFile("data.json", JSON.stringify(parseData), (err) => {
      if (err) throw err;
      res.status(200).send();
    });
  });
});
console.log(__dirname);

app.get("/files", (req, res) => {
  const filePath = path.join(__dirname, "./files/");
  console.log(__dirname);
  readdir(filePath, (err, files) => {
    if (err) return res.status(500).json({ error: "Failed to retrieve files" });
    res.status(200).send(files);
  });
});

app.get("/file/:filename", (req, res) => {
  const filepath = path.join(__dirname, "./files/", req.params.filename);
  if (!filepath) {
    res.status(404).json("File not found");
  }
  console.log(__dirname);
  readFile(filepath, "utf8", (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.listen(3001, () => {
  console.log("done");
});
