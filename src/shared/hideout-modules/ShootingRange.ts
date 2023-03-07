import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const ShootingRange: Module = {
  type: ModuleType.ShootingRange,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.MParts,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Screws,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.DuctTape,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Bolts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Nuts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Nails,
        qty: 4,
        defaultQty: 4,
      },
    ],
    [
      {
        type: ItemType.EMotor,
        qty: 6,
        defaultQty: 6,
      },
      {
        type: ItemType.MTape,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Poxeram,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.TSet,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Screws,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.EDrill,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.MParts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Camera,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Wires,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.ESLamp,
        qty: 6,
        defaultQty: 6,
      },
    ],
    [
      {
        type: ItemType.Master,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.PCB,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Wires,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.MParts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Caps,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Relay,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Cord,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.MultiTool,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Manual,
        qty: 1,
        defaultQty: 1,
      },
    ],
  ],
};
