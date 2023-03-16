import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const ScavCase: Module = {
  type: ModuleType.ScavCase,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Rooster,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Junk,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Moonshine,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Roler,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.GoldChain,
        qty: 8,
        defaultQty: 8,
      },
      {
        type: ItemType.Skull,
        qty: 6,
        defaultQty: 6,
      },
      {
        type: ItemType.Lion,
        qty: 3,
        defaultQty: 3,
      },
    ],
  ],
};
