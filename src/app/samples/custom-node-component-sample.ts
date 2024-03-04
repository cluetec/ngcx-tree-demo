import { NgcxTreeSampleData } from './_model';
import { CustomNodeComponent } from './custom-node-component';
import { someFruitNodes } from './data/nodes';

export const customNodeComponent: NgcxTreeSampleData = {
  title: 'Custom component',
  description: `Use your own component to render each node. <br> 
  See <a href="https://github.com/cluetec/ngcx-tree-demo/blob/main/src/app/samples/custom-node-component.ts">CustomNodeComponent</a>`,
  nodes: someFruitNodes,
  config: {
    treeNodeContentComponent: CustomNodeComponent,
  },
};
