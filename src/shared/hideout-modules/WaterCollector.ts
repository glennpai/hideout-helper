import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const WaterCollector: Module = {
  type: ModuleType.WaterCollector,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.DuctTape,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Nuts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Bolts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Hose,
        qty: 4,
        defaultQty: 4,
      },
    ],
    [
      {
        type: ItemType.TSet,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Hose,
        qty: 6,
        defaultQty: 6,
      },
      {
        type: ItemType.EMotor,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.KEK,
        qty: 2,
        defaultQty: 2,
      },
    ],
    [
      {
        type: ItemType.Ratchet,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.RUB,
        qty: 20000,
        defaultQty: 20000,
      },
      {
        type: ItemType.Elite,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Shus,
        qty: 5,
        defaultQty: 5,
      },
    ],
  ],
};
