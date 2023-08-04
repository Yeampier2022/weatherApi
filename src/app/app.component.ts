import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from './services/weather-services.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherServices: WeatherServicesService) {}
  cityName?: string = 'Maracaibo';
  weatherData?: any;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSumbit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: any) {
    this.weatherServices.getWeatherData(cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(JSON.stringify(this.weatherData));
      },
    });
  }

  title = 'apiWeather';
}
