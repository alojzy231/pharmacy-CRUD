import { Role } from '@dto';
import { convertToSelectData } from '@utils/convertToSelectData';

// We don't want to show the owner option in the select
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { OWNER: _OWNER, ...restRoles } = Role;

export const ROLES = Object.values(restRoles).map((element) => convertToSelectData(element));
