const fetch = require('node-fetch');

const apiKey = `1a38ab5a80fac5388f148d569c1f0992`;
var city = 'seattle';
const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

const url = 'https://community-open-weather-map.p.rapidapi.com/forecast?q=seattle%2Cus&units=imperial';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': '1a38ab5a80fac5388f148d569c1f0992'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));