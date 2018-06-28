import { Component, OnInit } from '@angular/core';
import { TreeNodeModel } from '../models/tree-node.model';

@Component({
  selector: 'ngx-tree',
  templateUrl: './ngx-tree.component.html',
  styleUrls: ['./ngx-tree.component.css']
})
export class NgxTreeComponent implements OnInit {

  private nodes: TreeNodeModel[];

  constructor() { }

  ngOnInit() {
    this.nodes = [
      {
        label: '1',
        children: [
          {
            label: '1.1',
            children: [
              {
                label: '1.1.1'
              }
            ]
          }
        ]
      },
      {
        label: '2'
      }
    ];

  }


}
