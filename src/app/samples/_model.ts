import { NgcxTreeConfig, NgcxTreeNode } from '@cluetec/ngcx-tree';

export interface NgcxTreeSampleData {
  title?: string;
  description?: string;
  nodes: NgcxTreeNode[];
  config?: NgcxTreeConfig<any>;
}
