import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string ='kevin';
  public nameUpper: string ='KEVIN';
  public fullName: string ='kEViN lUnA';

  public customDate: Date = new Date();
}
