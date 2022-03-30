const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");
const fetch = require("node-fetch");
const apiKey = `${process.env.API_KEY}`;
const path = require("path");
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
const app = express();
app.use(express.static(REACT_BUILD_DIR));

const PORT = 4000 || process.env.PORT;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

// app.get("/api/weather", (req, res) => {
//   const options = {
//     method: "GET",
//     url: `http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=${apiKey}`,
//   };

//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
//   });
// });

// create the get request
// app.get('/api/students', cors(), async (req, res) => {
//   // const STUDENTS = [

//   //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
//   //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
//   //     { id: 3, firstName: 'Fariba', lastName: 'Dadko' },
//   //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
//   //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
//   // ];
//   // res.json(STUDENTS);
//   try {
//     const { rows: students } = await db.query('SELECT * FROM students');
//     res.send(students);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// create city POST request
let city;
app.post("/api/search-city", (req, res) => {
  city = req.body.city;
  res.redirect("/api/weather");
});

// create the GET request
app.post("/api/weather", cors(), async (req, res) => {
  console.log(req.body.city);
  city = req.body.city;
  let baseURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
  let apiID = `&units=imperial&appid=${apiKey}`;
  const userInput = (url1, url2, city) => {
    let newURL = url1 + city + url2;
    return newURL;
  };
  const apiURL = userInput(baseURL, apiID, city);

  console.log(city);

  // change to api request/fetch thingy
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.error("Fetch error: ", err);
  }

  // const result = await db.query(
  //   'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
  //   [newUser.firstname, newUser.lastname],
  // );
  // console.log(result.rows[0]);
  // res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
