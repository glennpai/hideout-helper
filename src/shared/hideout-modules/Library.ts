import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Library: Module = {
  type: ModuleType.Library,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.BakeEzy,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.SDiary,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Diary,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Manual,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Chainlet,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Horse,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.RUB,
        qty: 400000,
        defaultQty: 400000,
      },
    ],
  ],
};
