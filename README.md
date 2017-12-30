# ngx-numeral
[![npm version](https://badge.fury.io/js/ngx-numeral.svg)](https://badge.fury.io/js/ngx-numeral)
[![Build Status](https://travis-ci.org/jogboms/ngx-numeral.svg?branch=master)](https://travis-ci.org/jogboms/ngx-numeral)
[![Coverage Status](https://coveralls.io/repos/github/jogboms/ngx-numeral/badge.svg?branch=master&cacheBuster=1)](https://coveralls.io/github/jogboms/ngx-numeral?branch=master)

An Angular pipe module for interfacing the Awesome [Numeraljs](http://numeraljs.com/) library.

## Installation

 ```bash
 npm i -S ngx-numeral
 ```

## Usage

Add `NumeralModule` to your application module.

 ```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NumeralModule.forRoot()
    // ...
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

Use Pipe within your template file

``` html
<h1>{{ '12345.123' | numeral:'$0,0.00' }}</h1>
```

Or instatiate `NumeralPipe` in your components with the desired value.

```ts
import { NumeralPipe } from 'ngx-numeral';

class ExampleComponent implements OnInit {
  formatted_string: string;

  ngOnInit() {
    const numeral = new NumeralPipe('7784.374');
    this.formatted_string = numeral.format('$0,0.00');
  }
}
```

A demo application is also included.