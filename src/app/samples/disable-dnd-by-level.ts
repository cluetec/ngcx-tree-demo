import { NgcxTreeNodeWrapper } from '@cluetec/ngcx-tree';
import { NgcxTreeSampleData } from './_model';
import { someMoreNodes } from './data/more-nodes';

export const disableDndOnLevels: NgcxTreeSampleData = {
  title: 'Disable Drag & Drop depending on nodes',
  description: `Root nodes are static and may not be moved, neither sub-nodes may be moved to become a root node. Only leaf nodes may be moved (without children).`,
  nodes: someMoreNodes,
  config: {
    allowDrag: (node: NgcxTreeNodeWrapper<any>) =>
      node.depth > 0 && (node.children?.length ?? 0) === 0,
    allowDrop: (
      _node: NgcxTreeNodeWrapper<any>,
      intoNode?: NgcxTreeNodeWrapper<any>
    ) => intoNode != undefined,
  },
};
