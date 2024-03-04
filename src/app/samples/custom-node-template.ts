import { NgcxTreeSampleData } from './_model';
import { someFruitNodes } from './model/nodes';

export const customNodeTemplate: NgcxTreeSampleData = {
  title: 'Custom angular template',
  description: 'Use your own angular template to render each node',
  nodes: someFruitNodes,
  config: {},
};
