import { SEARCH_RESULT_KEYS, SearchResultDTO } from '@dto';
import { SpotlightAction } from '@mantine/spotlight';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { NextRouter, useRouter } from 'next/router';

import { searchService } from '@api/services/SearchService';
import { Route } from '@const/route';

export const searchKey = {
  all: ['hospitals'] as const,
  details: () => [...searchKey.all, 'details'] as const,
};

type UseGetAllResult = SpotlightAction[];

const select = (data: SearchResultDTO, redirect: NextRouter['push']): UseGetAllResult => {
  const array = Object.entries(data).flatMap(([key, value]) => {
    if (key === SEARCH_RESULT_KEYS.product) {
      const products = Array.isArray(value) ? (value as SearchResultDTO['product']) : [value];

      return products.map(({ category, id, name, type }) => ({
        description: `${category}, ${type}`,
        onTrigger: () => redirect(`${Route.Product}/${id}`),
        title: `Product: ${name}`,
      }));
    }

    if (key === SEARCH_RESULT_KEYS.doctor) {
      const doctors = Array.isArray(value) ? (value as SearchResultDTO['doctor']) : [value];

      return doctors.map(({ hospital, id, lastName, name, profession }) => ({
        description: `${profession.toLowerCase()}, ${hospital}`,
        onTrigger: () => redirect(`${Route.Doctor}/${id}`),
        title: `Doctor: ${name} ${lastName}`,
      }));
    }

    const hospitals = Array.isArray(value) ? (value as SearchResultDTO['hospital']) : [value];

    return hospitals.map(({ address, city, id, name, streetName }) => ({
      description: `${city}, ${streetName}, ${address} `,
      onTrigger: () => redirect(`${Route.Hospital}/${id}`),
      title: `Hospital: ${name}`,
    }));
  });

  return array.length === 0 ? [] : array;
};

const getAll = async () => {
  const { data } = await searchService.getAll();

  return data;
};

export const useGetAll = (): UseQueryResult<UseGetAllResult> => {
  const router = useRouter();

  return useQuery(searchKey.details(), getAll, { select: (data) => select(data, router.push) });
};
