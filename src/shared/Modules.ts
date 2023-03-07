import {
  AirFilteringUnit,
  BitcoinFarm,
  BoozeGenerator,
  DefectiveWall,
  Generator,
  Gym,
  Heating,
  Illumination,
  IntelligenceCenter,
  Lavatory,
  Library,
  Medstation,
  NutritionUnit,
  RestSpace,
  ScavCase,
  Security,
  ShootingRange,
  SolarPower,
  Stash,
  Vents,
  WaterCollector,
  Workbench,
} from './hideout-modules';
import { ItemType } from './Items';

export const enum ModuleType {
  AirFilter = 'Air Filtering Unit',
  BitcoinFarm = 'Bitcoin Farm',
  BoozeGen = 'Booze Generator',
  DefectiveWall = 'Defective Wall',
  Generator = 'Generator',
  Gym = 'Gym',
  Heating = 'Heating',
  Illumination = 'Illumination',
  IntelCenter = 'Intelligence Center',
  Lavatory = 'Lavatory',
  Library = 'Library',
  Medstation = 'Medstation',
  NutritionUnit = 'Nutrition Unit',
  RestSpace = 'Rest Space',
  ScavCase = 'Scav Case',
  Security = 'Security',
  ShootingRange = 'Shooting Range',
  SolarPower = 'Solar Power',
  Stash = 'Stash',
  Vents = 'Vents',
  WaterCollector = 'Water Collector',
  Workbench = 'Workbench',
  ChristmasTree = 'Christmas Tree',
}

export type Item = {
  type: ItemType;
  qty: number;
  defaultQty: number;
};

export type LevelRequirement = Item[];
export type Level = 0 | 1 | 2 | 3 | 4 | 5;

export type Module = {
  type: ModuleType;
  tracking: boolean;
  expanded: boolean;
  level: Level;
  requirements: LevelRequirement[];
};

export const Hideout: Module[] = [
  AirFilteringUnit,
  BitcoinFarm,
  BoozeGenerator,
  DefectiveWall,
  Generator,
  Gym,
  Heating,
  Illumination,
  IntelligenceCenter,
  Lavatory,
  Library,
  Medstation,
  NutritionUnit,
  RestSpace,
  ScavCase,
  Security,
  ShootingRange,
  SolarPower,
  Stash,
  Vents,
  WaterCollector,
  Workbench,
];
