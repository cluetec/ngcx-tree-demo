import { NgcxTreeNode } from '@cluetec/ngcx-tree';

export const someMoreNodes: NgcxTreeNode[] = [
  {
    id: 'node1',
    title: 'A root node',
  },
  {
    id: 'node2',
    title: 'Another root node',
  },
  {
    id: 'fru',
    title: 'Another root node with children',
    children: [
      {
        id: 'node11',
        title: 'Sub Node 1',
        children: [
          {
            id: 'node2',
            title: 'Sub Node 2',
            children: [
              {
                id: 'node3',
                title: 'Sub Node 3',
                children: [
                  {
                    id: 'node4',
                    title: 'Sub Node 4',
                  },
                  {
                    id: 'node5',
                    title: 'Sub Node 5',
                  },
                  {
                    id: 'node6',
                    title: 'Sub Node 6',
                  },
                  {
                    id: 'node7',
                    title: 'Sub Node 7',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
