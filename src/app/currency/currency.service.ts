import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencies=[]
  constructor(private http: HttpClient) { }


  findCurrency():Observable<any>{
    return this.http.get('http://apilayer.net/api/live?access_key=4e5c33f26c5f8fd5ebad5b2aa69af7d2')

  }

  convert(from:string, to:string){
    return this.http.get('http://apilayer.net/api/live?access_key=4e5c33f26c5f8fd5ebad5b2aa69af7d2').subscribe({
      next:(res)=>{
        
      }
    })
  }
}
