import { ItemType } from '../Items';
import { Module, ModuleType } from '../Modules';

export const AirFilteringUnit: Module = {
  type: ModuleType.AirFilter,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.Filter,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.USD,
        qty: 25000,
        defaultQty: 25000,
      },
      {
        type: ItemType.PFilter,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.MTube,
        qty: 3,
        defaultQty: 3,
      },
    ],
  ],
};
