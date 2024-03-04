import { NgcxTreeNode } from '@cluetec/ngcx-tree';

export const someFruitNodesWithIcons: NgcxTreeNode[] = [
  {
    id: 'meat',
    title: 'Meat',
    faIcon: 'fa-drumstick-bite',
  },
  {
    id: 'fish',
    title: 'Fish',
    faIcon: 'fa-fish',
  },
  {
    id: 'fru',
    title: 'Fruit',
    faIcon: 'fa-seedling',
    children: [
      {
        id: 'app',
        title: 'Apple',
        faIcon: 'fa-apple-whole',
      },
      {
        id: 'ban',
        title: 'Banana',
        faIcon: 'fa-moon',
      },
      {
        id: 'fruloo',
        title: 'Fruit loops',
        faIcon: 'fa-circle',
      },
    ],
  },
];
