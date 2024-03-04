import { NgcxTreeSampleData } from './_model';
import { CustomNodeComponent } from './custom-node-component';
import { someFruitNodes } from './model/nodes';

export const customNodeComponent: NgcxTreeSampleData = {
  title: 'Custom component',
  description: 'Use your own component to render each node',
  nodes: someFruitNodes,
  config: {
    treeNodeContentComponent: CustomNodeComponent,
  },
};
