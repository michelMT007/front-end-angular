import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../../../../bstd/src/app/shared/model/stock-model';

@Injectable({
    providedIn: 'root'
})
export default class DashcoardService {
    //URL do backend no heroku
    readonly baseUrl = 'https://sistema-cotacao-santander.herokuapp.com';

    constructor(private http: HttpClient) { }

    async getStocks(): Promise<Stock[]> {
        return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
    }

}
