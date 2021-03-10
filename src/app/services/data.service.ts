import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IData } from '../types/idata';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = `https://rest.coinapi.io/v1/exchanges?apikey=${environment.coinApiKey}`;

  constructor(private http: HttpClient) {}

  getData(): Subject<IData[]> {
    const { apiUrl } = this;
    const data = new Subject<IData[]>();
    this.http.get(apiUrl).subscribe(
      (res: IData[]) => data.next(res),
      (err) => console.error(err),
    );
    return data;
  }
}
