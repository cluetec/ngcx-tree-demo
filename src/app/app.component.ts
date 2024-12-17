import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgcxTreeNode, NgcxTreeNodeWrapper } from '@cluetec/ngcx-tree';
import { NgcxTreeSampleViewerComponent } from './ngcx-tree-sample-viewer/ngcx-tree-sample-viewer.component';
import { NgcxTreeSampleData } from './samples/_model';
import { basicSample } from './samples/basic';
import { basicWithIcons } from './samples/basic-with-icons';
import { basicWithSelection } from './samples/basic-with-selection';
import { customNodeComponent } from './samples/custom-node-component-sample';
import { customNodeTemplate } from './samples/custom-node-template';
import { disableDnd } from './samples/disable-dnd';
import { disableDndOnLevels } from './samples/disable-dnd-by-level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgcxTreeSampleViewerComponent],
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
