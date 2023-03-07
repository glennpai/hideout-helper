import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const SolarPower: Module = {
  type: ModuleType.SolarPower,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.AESA,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.MCC,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Euros,
        qty: 25000,
        defaultQty: 25000,
      },
      {
        type: ItemType.LCD,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.MCable,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.PFilter,
        qty: 10,
        defaultQty: 10,
      },
    ],
  ],
};
