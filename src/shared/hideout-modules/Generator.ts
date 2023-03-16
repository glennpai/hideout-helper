import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Generator: Module = {
  type: ModuleType.Generator,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Plug,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.RUB,
        qty: 100000,
        defaultQty: 100000,
      },
    ],
    [
      {
        type: ItemType.Bulbex,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Relay,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.EMotor,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Wires,
        qty: 15,
        defaultQty: 15,
      },
    ],
    [
      {
        type: ItemType.PSU,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Relay,
        qty: 6,
        defaultQty: 6,
      },
      {
        type: ItemType.EMotor,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Plug,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.MParts,
        qty: 7,
        defaultQty: 7,
      },
    ],
  ],
};
