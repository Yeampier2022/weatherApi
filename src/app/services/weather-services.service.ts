import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServicesService {
  constructor(private http: HttpClient) {}

  //   getWeatherData(cityName: string): Observable<WeatherData> {
  //     return this.http.get<WeatherData>(environment.apiUrl, {
  //       headers: new HttpHeaders()
  //         .set(
  //           environment.XRapidAPIHostHeaderName,
  //           environment.XRapidAPIHostHeaderValue
  //         ).set(
  //           environment.XRapidAPIKeyHeaderName,
  //           environment.XRapidAPIKeyHeaderValue
  //         ),
  //         params: new HttpHeaders()
  //         .set('q', cityName)
  //         .set('units', 'metric')
  //     });
  //   // }

  //   //  return this.http.get<WeatherData>(environment.apiUrl, {
  //   //     headers: new HttpHeaders()
  //   //       .set(
  //   //         environment.XRapidAPIHostHeaderName,
  //   //         environment.XRapidAPIHostHeaderValue
  //   //       )
  //   //       .set(
  //   //         environment.XRapidAPIKeyHeaderName,
  //   //         environment.XRapidAPIKeyHeaderValue
  //   //       ),
  //   //     params: new HttpHeaders()
  //   //       .set('q', cityName)
  //   //       .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
  //   //       .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
  //   //       .set('units', 'metric')

  //   //   });
  //   // }
  // }

  /*/ bard
  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${environment.apiUrl}?q=${cityName}&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=standard`;
    return this.http.get<WeatherData>(url);
  }
/*/
  // getWeatherData(cityName: string) {
  //   return this.http.get(environment.apiUrl, {
  //     headers: new HttpHeaders()
  //       .set(
  //         environment.XRapidAPIHostHeaderName,
  //         environment.XRapidAPIHostHeaderValue
  //       )
  //       .set(
  //         environment.XRapidAPIKeyHeaderName,
  //         environment.XRapidAPIKeyHeaderValue
  //       ),
  //   });
  // }


  apiKey= "da0f9c8d90bde7e619c3ec47766a42f4"
  getWeatherData(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
