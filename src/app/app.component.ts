import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmartCardComponent } from './smart-card/smart-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SmartCardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit {
 
  constructor(private http: HttpClient){}

  public content: any;
  public content1:  any; 

  ngOnInit(): void {
    this.getdata();
  }


  public getdata() {
    this.http.get('https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json')
      .subscribe((response: any) => {
        this.content = response.content;
        this.content1 = response.global;    
      });
  }
}
