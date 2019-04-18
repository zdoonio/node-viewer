import { Component, OnInit } from '@angular/core';
import {Nodes} from '../../interfaces/nodes';
import {NodesService} from '../../services/nodes.service';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {

  nodes: Nodes = [];

  constructor(private nodeService: NodesService) { }

  ngOnInit() {
    this.setupNodes();
  }

  private setupNodes() {
    this.nodeService.getNodes()
      .subscribe({
        next: (response) => {
          this.nodes = response.nodes;
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
