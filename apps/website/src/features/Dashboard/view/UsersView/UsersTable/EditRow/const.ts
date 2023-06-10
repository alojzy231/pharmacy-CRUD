import { Role } from '@dto';
import { convertToSelectData } from '@utils/convertToSelectData';

export const ROLES = Object.values(Role).map((element) => convertToSelectData(element));
