import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Kevin';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Samantha';
    this.gender = 'female';
  }
  //i18nPlural
  public clients: string[] = ['Kevin','Fernando','Andres','Karen','Marcos','Armando','Roro','Caro','Chio','Sandra'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Kevin',
    age: 25,
    address: 'Monterrey, Mexico'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Ricardo'
    }, 3500);
  })
}
