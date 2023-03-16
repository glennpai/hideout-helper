import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const BoozeGenerator: Module = {
  type: ModuleType.BoozeGen,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.MParts,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Gauge,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Helix,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Tube,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.PGW,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Therm,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Hose,
        qty: 5,
        defaultQty: 5,
      },
    ],
  ],
};
