import { GET_ALL_KEYS, GetAllResultDTO } from '@dto';
import { SpotlightAction } from '@mantine/spotlight';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { NextRouter, useRouter } from 'next/router';

import { searchService } from '@api/services/SearchService';

import { convertDoctors, convertHospitals, convertProducts } from './utils';

export const getAllKey = {
  all: ['getAll'] as const,
  details: () => [...getAllKey.all, 'details'] as const,
};

export type UseGetAllResult = SpotlightAction[];

const select = (data: GetAllResultDTO, redirect: NextRouter['push']): UseGetAllResult => {
  if (Array.isArray(data)) return [];
  const products = convertProducts(data[GET_ALL_KEYS.product], redirect);
  const doctors = convertDoctors(data[GET_ALL_KEYS.doctor], redirect);
  const hospitals = convertHospitals(data[GET_ALL_KEYS.hospital], redirect);

  return [...products, ...doctors, ...hospitals];
};

const getAll = async () => {
  const { data } = await searchService.getAll();

  return data;
};

export const useGetAll = (): UseQueryResult<UseGetAllResult> => {
  const router = useRouter();

  return useQuery(getAllKey.details(), getAll, {
    select: (data) => select(data, router.push),
  });
};
