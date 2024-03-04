import { NgcxTreeNode } from '@cluetec/ngcx-tree';

export const someFruitNodes: NgcxTreeNode[] = [
  {
    id: 'meat',
    title: 'Meat',
  },
  {
    id: 'fish',
    title: 'Fish',
  },
  {
    id: 'fru',
    title: 'Fruit',
    children: [
      {
        id: 'app',
        title: 'Apple',
      },
      {
        id: 'ban',
        title: 'Banana',
      },
      {
        id: 'fruloo',
        title: 'Fruit loops',
      },
    ],
  },
];
