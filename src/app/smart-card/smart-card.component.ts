import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-smart-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './smart-card.component.html',
  styleUrls: ['./smart-card.component.css'],
})
export class SmartCardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public content: any;
  public content1: any;
  public cardDetails: any;
  public cardDetails1: any;

  ngOnInit(): void {
    this.getGlobalData();
    this.getCardDetail();
  }

  public getGlobalData() {
    try {
      this.http
        .get(
          'https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json'
        )
        .subscribe((response: any) => {
          this.content = response.content;
          this.content1 = response.global;
        });
    } catch (err) {
      console.error(err);
    }
  }

  public getCardDetail() {
    try {
      this.http
        .get(
          'https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json'
        )
        .subscribe((response: any) => {
          this.cardDetails = response.data[0];
          this.cardDetails1 = response.data[1];
        });
    } catch (err) {
      console.error(err);
    }
  }
}
