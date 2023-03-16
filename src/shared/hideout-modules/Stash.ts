import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Stash: Module = {
  type: ModuleType.Stash,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.WD40,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.HandDrill,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Nails,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Screws,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.RUB,
        qty: 2500000,
        defaultQty: 2500000,
      },
    ],
    [
      {
        type: ItemType.EDrill,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Screws,
        qty: 15,
        defaultQty: 15,
      },
      {
        type: ItemType.Nails,
        qty: 7,
        defaultQty: 7,
      },
      {
        type: ItemType.RUB,
        qty: 8500000,
        defaultQty: 8500000,
      },
    ],
    [
      {
        type: ItemType.Euros,
        qty: 200000,
        defaultQty: 200000,
      },
      {
        type: ItemType.Nuts,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.Bolts,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.Shus,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Ratchet,
        qty: 2,
        defaultQty: 2,
      },
    ],
  ],
};
