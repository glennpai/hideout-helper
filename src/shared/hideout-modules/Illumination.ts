import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Illumination: Module = {
  type: ModuleType.Illumination,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.RUB,
        qty: 10000,
        defaultQty: 10000,
      },
      {
        type: ItemType.Crickent,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Bulb,
        qty: 14,
        defaultQty: 14,
      },
      {
        type: ItemType.Wires,
        qty: 10,
        defaultQty: 10,
      },
    ],
    [
      {
        type: ItemType.RUB,
        qty: 50000,
        defaultQty: 50000,
      },
      {
        type: ItemType.Caps,
        qty: 7,
        defaultQty: 7,
      },
      {
        type: ItemType.ESLamp,
        qty: 12,
        defaultQty: 12,
      },
      {
        type: ItemType.Wires,
        qty: 6,
        defaultQty: 6,
      },
    ],
  ],
};
