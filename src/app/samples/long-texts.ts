import { NgcxTreeSampleData } from './_model';
import { someFruitNodes } from './model/nodes';

export const basicWithSelection: NgcxTreeSampleData = {
  title: 'Selection',
  description: 'Basic sample with selection enabled.',
  nodes: someFruitNodes,
  config: {
    allowSelection: () => true,
  },
};
