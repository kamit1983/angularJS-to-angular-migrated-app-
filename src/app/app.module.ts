import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
}

