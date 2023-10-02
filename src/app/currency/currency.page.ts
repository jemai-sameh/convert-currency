import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {
  currencies: any = []
  resultat = '';
  currency1 = ""
  constructor(private service: CurrencyService) { }

  ngOnInit() {
    this.service.findCurrency().subscribe({
      next: resp => {
        console.log(resp)
        this.currency1 = resp["source"]
        for (const key in resp['quotes']) {
          this.currencies.push(key.slice(-3));

        }


        console.log(resp["quotes"])
      }
    })
  }

  onConvert() {
    //  this.service.convert()

  }

}
