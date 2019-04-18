import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../interfaces/node';

@Component({
  selector: 'app-node-list-item',
  templateUrl: './node-list-item.component.html',
  styleUrls: ['./node-list-item.component.scss']
})
export class NodeListItemComponent implements OnInit {

  @Input() node: Node = null;
  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  showHideSubNodes() {
    this.isShow = !this.isShow;
  }

}
