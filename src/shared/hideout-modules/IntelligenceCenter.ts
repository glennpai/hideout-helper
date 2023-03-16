import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const IntelligenceCenter: Module = {
  type: ModuleType.IntelCenter,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Factory,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Intelligence,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Maps,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Intelligence,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.FlashDrive,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Cord,
        qty: 7,
        defaultQty: 7,
      },
      {
        type: ItemType.HDD,
        qty: 4,
        defaultQty: 4,
      },
    ],
    [
      {
        type: ItemType.MCable,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.SGC10,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.GPSA,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.VPX,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.MFD,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.SMT,
        qty: 2,
        defaultQty: 2,
      },
    ],
  ],
};
