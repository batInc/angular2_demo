import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

	getWeather() {
		var json = getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=c6a5060483924264de49050df47e6584&units=metric', function(err, data) {
			if (err != null) {
				console.log("Failed to read json data");
			} else {
				update_weather(data);
			}
		});
	}

}

function update_weather(data) {

	document.getElementById("city-name").innerHTML = data.name;
	document.getElementById("description").innerHTML = toTitleCase(data.weather[0].description);
	document.getElementById("w-icon").setAttribute('src', "../assets/" + data.weather[0].icon + ".png");
	document.getElementById("temp").innerHTML = Math.round(data.main.temp) + " &deg;C";

}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getJSON(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("get", url, true);
	xhr.responseType = "json";
	xhr.onload = function() {
	  var status = xhr.status;
	  if (status == 200) {
		callback(null, xhr.response);
	  } else {
		callback(status);
	  }
	};
	xhr.send();
};
