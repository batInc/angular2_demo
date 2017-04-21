import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {

	constructor(private _weatherService: WeatherService) {};

  	title = 'toronto.';
  	image = '../assets/banner.jpg';

	ngOnInit() {
        this._weatherService.getWeather();
	}

	description = "About our company";

	about = "This is about us section text";
	
	services = "This section is for services";

	customers = [{'name':'Batman','comment':'Hello World!.'},{'name':'Joker','comment':'Haaa haa ha'}];

  	date = Date();

}
