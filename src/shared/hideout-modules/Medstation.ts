import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Medstation: Module = {
  type: ModuleType.Medstation,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.RUB,
        qty: 50000,
        defaultQty: 50000,
      },
      {
        type: ItemType.Syringe,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Meds,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Bandage,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Vitamins,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.NaCl,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Bloodset,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Esmarch,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.MedTools,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.RUB,
        qty: 150000,
        defaultQty: 150000,
      },
    ],
    [
      {
        type: ItemType.OScope,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.RUB,
        qty: 500000,
        defaultQty: 500000,
      },
      {
        type: ItemType.NaCl,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.LEDX,
        qty: 1,
        defaultQty: 1,
      },
    ],
  ],
};
