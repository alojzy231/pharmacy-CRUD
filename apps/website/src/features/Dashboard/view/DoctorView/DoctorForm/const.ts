import { Profession } from '@dto';
import { convertEnumToString } from '@utils/convertEnumToString';

function convertToSelectData(option: string): { label: string; value: string } {
  return { label: convertEnumToString(option), value: option };
}

export const PROFESSIONS = Object.values(Profession).map((element) => convertToSelectData(element));
