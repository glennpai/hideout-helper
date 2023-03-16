import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Gym: Module = {
  type: ModuleType.Gym,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.TSet,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.EDrill,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.MScissors,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Nuts,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Bolts,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.WD40,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Tape,
        qty: 1,
        defaultQty: 1,
      },
    ],
  ],
};
