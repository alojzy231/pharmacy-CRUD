import { convertEnumToString } from './convertEnumToString';

export function convertToSelectData(option: string): { label: string; value: string } {
  return { label: convertEnumToString(option), value: option };
}
