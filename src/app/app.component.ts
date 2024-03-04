import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgcxTreeNode, NgcxTreeNodeWrapper } from '@cluetec/ngcx-tree';
import { NgcxTreeSampleData } from './samples/_model';
import { basicSample } from './samples/basic';
import { basicWithIcons } from './samples/basic-with-icons';
import { customNodeComponent } from './samples/custom-node-component-sample';
import { customNodeTemplate } from './samples/custom-node-template';
import { disableDnd } from './samples/disable-dnd';
import { disableDndOnLevels } from './samples/disable-dnd-by-level';
import { basicWithSelection } from './samples/long-texts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  samples: NgcxTreeSampleData[] = [
    basicSample,
    disableDnd,
    disableDndOnLevels,
    basicWithIcons,
    basicWithSelection,
    customNodeComponent,
  ];

  @ViewChild('treeNodeTemplate', { static: true })
  treeNodeTemplate?: TemplateRef<any>;

  ngOnInit(): void {
    this.samples.push({
      ...customNodeTemplate,
      config: { treeNodeContentTemplate: this.treeNodeTemplate },
    });
  }
  sampleClicked(nodeWrapper: NgcxTreeNodeWrapper<NgcxTreeNode>) {
    console.log('sample button clicked ' + nodeWrapper?.id);
  }
}
