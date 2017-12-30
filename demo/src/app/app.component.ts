import { Component } from '@angular/core';
import { NumeralPipe } from 'ngx-numeral';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  get test() {
    // return (new NumeralPipe('7784.374')).format('$0,0.00');
    return (new NumeralPipe()).format('$0,0.00');
  }
}
