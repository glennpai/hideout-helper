import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Vents: Module = {
  type: ModuleType.Vents,
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
    ],
    [
      {
        type: ItemType.MParts,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.CPUFan,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.CarBatt,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.EMotor,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.PCB,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.EMotor,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.MParts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Wires,
        qty: 14,
        defaultQty: 14,
      },
      {
        type: ItemType.CarBatt,
        qty: 4,
        defaultQty: 4,
      },
    ],
  ],
};
