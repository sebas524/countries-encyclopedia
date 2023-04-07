import { Country } from './countryInterface';
import { Regions } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region: Regions;
  countries: Country[];
}
