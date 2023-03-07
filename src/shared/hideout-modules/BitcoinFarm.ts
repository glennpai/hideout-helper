import { ItemType } from '../Items';
import { ModuleType, Module } from '../Modules';

export const BitcoinFarm: Module = {
  type: ModuleType.BitcoinFarm,
  tracking: false,
  expanded: false,
  level: 0,
  requirements: [
    [
      {
        type: ItemType.TPlug,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.VPX,
        qty: 1,
        defaultQty: 1,
      },
      {
        type: ItemType.Cord,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.PSU,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.CPUFan,
        qty: 10,
        defaultQty: 10,
      },
    ],
    [
      {
        type: ItemType.CPUFan,
        qty: 15,
        defaultQty: 15,
      },
      {
        type: ItemType.PSU,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.PCB,
        qty: 15,
        defaultQty: 15,
      },
      {
        type: ItemType.Relay,
        qty: 5,
        defaultQty: 5,
      },
      {
        type: ItemType.PFilter,
        qty: 2,
        defaultQty: 2,
      },
    ],
    [
      {
        type: ItemType.CPUFan,
        qty: 25,
        defaultQty: 25,
      },
      {
        type: ItemType.Tube,
        qty: 15,
        defaultQty: 15,
      },
      {
        type: ItemType.EMotor,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.Gauge,
        qty: 10,
        defaultQty: 10,
      },
      {
        type: ItemType.TankBattery,
        qty: 1,
        defaultQty: 1,
      },
    ],
  ],
};
