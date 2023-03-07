import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Heating: Module = {
  type: ModuleType.Heating,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.RUB,
        qty: 25000,
        defaultQty: 25000,
      },
      {
        type: ItemType.CMatches,
        qty: 2,
        defaultQty: 2,
      },
    ],
    [
      {
        type: ItemType.DFuel,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.RUB,
        qty: 50000,
        defaultQty: 50000,
      },
      {
        type: ItemType.HMatches,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Crickent,
        qty: 3,
        defaultQty: 3,
      },
    ],
    [
      {
        type: ItemType.Helix,
        qty: 8,
        defaultQty: 8,
      },
      {
        type: ItemType.Wires,
        qty: 8,
        defaultQty: 8,
      },
      {
        type: ItemType.Relay,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.MTube,
        qty: 2,
        defaultQty: 2,
      },
    ],
  ],
};
