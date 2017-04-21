import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'toronto.';
  	image = '../assets/banner.jpg';

	description = "Urban Influence is a tight-knit team of designers, developers, writers, and strategists. For over a decade, we've helped businesses to craft honest, emotional experiences through strategy, brand development, graphic design, web design, and storytelling.";

	about = "We are Nathan Strandberg and Katie Kirk, two individuals with a passion for creativity — creativity makes us happy. We truly believe in the transformative power of illustration and design and their ability to simplify communications, elevate experiences, engage and inspire people everywhere. Good design and good relationships come from collaboration. We're excited to start a visual dialogue, learn about you, and make something beautiful together.";

	services = "I help companies, startups, and local business with website design. I can design and code, and am most effective when hired for both my advice AND technical skill. I enjoy working with my clients; every design comes with an explanation of my choices and invites discussion. Have something small or well-defined? I’d love to help translate your vision into a working website. Let’s talk.";

	customers = [{'name':'Alicia Martelli','comment':'Great customer service.'},{'name':'Jonathan Andrews','comment':'Very creative designs.'}];

  	date = Date();

	json = getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=c6a5060483924264de49050df47e6584&units=metric', function(err, data) {
		if (err != null) {
			console.log("Failed to read json data");
		} else {
			update_weather(data);
		}
	});

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
