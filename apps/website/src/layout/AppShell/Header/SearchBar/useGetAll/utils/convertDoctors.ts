import { GetAllResultDTO } from '@dto';
import { convertEnumToString } from '@utils/convertEnumToString';
import { NextRouter } from 'next/router';

import { Route } from '@const/route';

import { UseGetAllResult } from '..';

export function convertDoctors(
  data: GetAllResultDTO['doctor'],
  redirect: NextRouter['push']
): UseGetAllResult {
  return data.map(({ hospital, id, lastName, name, profession }) => ({
    description: `${convertEnumToString(profession)}, ${hospital.name}`,
    onTrigger: () => redirect(`${Route.Doctor}/${id}`),
    title: `Doctor: ${name} ${lastName}`,
  }));
}
