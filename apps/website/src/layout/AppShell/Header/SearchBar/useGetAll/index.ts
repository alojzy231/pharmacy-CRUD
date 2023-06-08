import { SEARCH_RESULT_KEYS, SearchResultDTO } from '@dto';
import { SpotlightAction } from '@mantine/spotlight';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { searchService } from '@api/services/SearchService';

export const searchKey = {
  all: ['hospitals'] as const,
  details: () => [...searchKey.all, 'details'] as const,
};

type UseGetAllResult = SpotlightAction[];

const select = (data: SearchResultDTO): UseGetAllResult => {
  const array = Object.entries(data).flatMap(([key, value]) => {
    if (key === SEARCH_RESULT_KEYS.product) {
      const products = value as SearchResultDTO['product'];

      return products.map(({ category, name, type }) => ({
        description: `${category}, ${type}`,
        onTrigger: () => console.log('Home'),
        title: `Product: ${name}`,
      }));
    }

    if (key === SEARCH_RESULT_KEYS.doctor) {
      const doctors = value as SearchResultDTO['doctor'];

      return doctors.map(({ hospital, lastName, name, profession }) => ({
        description: `${profession.toLowerCase()}, ${hospital}`,
        onTrigger: () => console.log('Home'),
        title: `Doctor: ${name} ${lastName}`,
      }));
    }

    const hospitals = value as SearchResultDTO['hospital'];

    return hospitals.map(({ address, city, name, streetName }) => ({
      description: `${city}, ${streetName}, ${address} `,
      onTrigger: () => console.log('Home'),
      title: `Doctor: ${name}}`,
    }));
  });

  return array.length === 0 ? [] : array;
};

const getAll = async () => {
  const { data } = await searchService.getAll();

  return data;
};

export const useGetAll = (): UseQueryResult<UseGetAllResult> =>
  useQuery(searchKey.details(), getAll, { select });
