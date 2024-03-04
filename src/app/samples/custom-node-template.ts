import { NgcxTreeSampleData } from './_model';
import { someFruitNodes } from './data/nodes';

export const customNodeTemplate: NgcxTreeSampleData = {
  title: 'Custom angular template',
  description: `Use your own angular template to render each node. <br> 
  See Html-Template <a href="https://github.com/cluetec/ngcx-tree-demo/blob/main/src/app/app.component.html#L48">here</a><br> 
  See Angular code <a href="https://github.com/cluetec/ngcx-tree-demo/blob/main/src/app/app.component.ts">here</a>`,
  nodes: someFruitNodes,
  config: {},
};
