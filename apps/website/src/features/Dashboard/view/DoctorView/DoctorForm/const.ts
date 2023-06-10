import { Profession } from '@dto';
import { convertToSelectData } from '@utils/convertToSelectData';

export const PROFESSIONS = Object.values(Profession).map((element) => convertToSelectData(element));
