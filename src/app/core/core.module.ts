import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { NodeListComponent } from '../node/pages/node-list/node-list.component';
import {NodesModule} from '../node/nodes/nodes.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NodeListComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    NodesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
