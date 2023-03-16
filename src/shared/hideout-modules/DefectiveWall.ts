import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const DefectiveWall: Module = {
  type: ModuleType.DefectiveWall,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Fleece,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Fleece,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Fleece,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Sledgehammer,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Fleece,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.TSet,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.MScissors,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Hose,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.DuctTape,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.TSet,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Elite,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.MParts,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Xeno,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.Wires,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Bulb,
        qty: 2,
        defaultQty: 2,
      },
    ],
  ],
};
