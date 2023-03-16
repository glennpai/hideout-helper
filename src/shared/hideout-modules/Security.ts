import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Security: Module = {
  type: ModuleType.Security,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.RUB,
        qty: 20000,
        defaultQty: 20000,
      },
      {
        type: ItemType.MTape,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.WD40,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.RUB,
        qty: 45000,
        defaultQty: 45000,
      },
      {
        type: ItemType.Elite,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.TP200,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.NIXXOR,
        qty: 8,
        defaultQty: 8,
      },
      {
        type: ItemType.LCD,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Wires,
        qty: 4,
        defaultQty: 4,
      },
      {
        type: ItemType.SSD,
        qty: 1,
        defaultQty: 1,
      },
    ],
  ],
};
