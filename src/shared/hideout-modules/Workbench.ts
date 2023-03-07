import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const Workbench: Module = {
  type: ModuleType.Workbench,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Nuts,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.Bolts,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.MultiTool,
        qty: 1,
        defaultQty: 1,
      },
    ],
    [
      {
        type: ItemType.Bolts,
        qty: 6,
        defaultQty: 6,
      },
      {
        type: ItemType.TSet,
        qty: 3,
        defaultQty: 3,
      },
      {
        type: ItemType.Master,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.EDrill,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.WParts,
        qty: 3,
        defaultQty: 3,
      },
    ],
    [
      {
        type: ItemType.RUB,
        qty: 395000,
        defaultQty: 395000,
      },
      {
        type: ItemType.Elite,
        qty: 2,
        defaultQty: 2,
      },
      {
        type: ItemType.FireKlean,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Thermite,
        qty: 2,
        defaultQty: 2,
      },
    ],
  ],
};
