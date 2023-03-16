import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Lavatory: Module = {
  type: ModuleType.Lavatory,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.RUB,
        qty: 2000,
        defaultQty: 2000,
      },
      {
        type: ItemType.TP,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Toothpaste,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Soap,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Awl,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.KEK,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Hose,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Screws,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.EDrill,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Krasavchik,
        qty: 2,
        defaultQty: 2,
      },
    ],
    [
      {
        type: ItemType.Xeno,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Hose,
        qty: 6,
        defaultQty: 6,
      },
      {
        type: ItemType.Gauge,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.TSet,
        qty: 1,
        defaultQty: 1,
      },
    ],
  ],
};
