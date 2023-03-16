import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const RestSpace: Module = {
  type: ModuleType.RestSpace,
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
        type: ItemType.DuctTape,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.CMatches,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.ESLamp,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.RUB,
        qty: 35000,
        defaultQty: 35000,
      },
      {
        type: ItemType.DVD,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Magnet,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.GreenBat,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Cord,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.Caps,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Wires,
        qty: 7,
        defaultQty: 7,
      },
    ],
  ],
};
