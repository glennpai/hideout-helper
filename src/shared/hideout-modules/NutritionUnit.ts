import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const NutritionUnit: Module = {
  type: ModuleType.NutritionUnit,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Salt,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Cord,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Relay,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.RUB,
        qty: 25000,
        defaultQty: 25000,
      },
    ],
    [
      {
        type: ItemType.Wrench,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.Hose,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Alkaline,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Relay,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.RUB,
        qty: 125000,
        defaultQty: 125000,
      },
      {
        type: ItemType.Majaica,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Sodium,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Cleaner,
        qty: 2,
        defaultQty: 2,
      },
    ],
  ],
};
