import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bind-test',
  templateUrl: './bind-test.component.html',
  styleUrls: ['./bind-test.component.css']
})
export class BindTestComponent implements OnInit {
  @Input() bankName: string;
  @Input('account-id') id: string;
  normalizedBankName: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
