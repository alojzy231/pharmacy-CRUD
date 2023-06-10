import { GetAllResultDTO } from '@dto';
import { NextRouter } from 'next/router';

import { Route } from '@const/route';

import { UseGetAllResult } from '..';

export function convertHospitals(
  data: GetAllResultDTO['hospital'],
  redirect: NextRouter['push']
): UseGetAllResult {
  return data.map(({ address, city, id, name, streetName }) => ({
    description: `${city}, ${streetName}, ${address} `,
    onTrigger: () => redirect(`${Route.Hospital}/${id}`),
    title: `Hospital: ${name}`,
  }));
}
