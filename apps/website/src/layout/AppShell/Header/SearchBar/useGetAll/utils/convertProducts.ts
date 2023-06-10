import { GetAllResultDTO } from '@dto';
import { convertEnumToString } from '@utils/convertEnumToString';
import { NextRouter } from 'next/router';

import { Route } from '@const/route';

import { UseGetAllResult } from '..';

export function convertProducts(
  data: GetAllResultDTO['product'],
  redirect: NextRouter['push']
): UseGetAllResult {
  return data.map(({ category, id, name, type }) => ({
    description: `${convertEnumToString(category)}, ${convertEnumToString(type)}`,
    onTrigger: () => redirect(`${Route.Product}/${id}`),
    title: `Product: ${name}`,
  }));
}
