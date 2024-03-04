import { NgcxTreeSampleData } from './_model';
import { someFruitNodes } from './model/nodes';

export const disableDnd: NgcxTreeSampleData = {
  title: 'Disable Drag & Drop',
  description: 'Basic sample without drag and drop.',
  nodes: someFruitNodes,
  config: {
    allowDrag: () => false,
  },
};
