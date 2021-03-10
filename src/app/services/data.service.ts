import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  headers = {
    'X-CMC_PRO_API_KEY': environment.X_CMC_PRO_API_KEY,
  };

  constructor(private http: HttpClient) { }

  getData(): Subject<object> {
    const {
      apiUrl,
      headers,
    } = this;
    const data = new Subject<object>();
    this.http.get(apiUrl, {
      headers
    }).subscribe(
      (res) => data.next(res),
      (err) => console.error(err),
    );
    return data;
  }
}
