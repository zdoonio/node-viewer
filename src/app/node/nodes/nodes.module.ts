import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeListComponent } from '../pages/node-list/node-list.component';
import {NodesService} from '../services/nodes.service';
import {NodeListItemComponent} from '../pages/node-list-item/node-list-item.component';

@NgModule({
  declarations: [NodeListItemComponent], imports: [CommonModule], exports: [NodeListItemComponent], providers: [NodesService]
})
export class NodesModule { }
