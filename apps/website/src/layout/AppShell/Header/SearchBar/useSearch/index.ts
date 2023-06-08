import { SearchArgumentsDTO, SearchResultDTO } from '@dto';
import { useMutation } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { searchService } from '@api/services/SearchService';

export const searchKey = {
  all: ['hospitals'] as const,
  details: () => [...searchKey.all, 'details'] as const,
};

type UseSearchResult = { group: string; label: string; value: string }[] | undefined;

const select = (data: SearchResultDTO): UseSearchResult => {
  const array = Object.entries(data).flatMap(([key, value]) =>
    value.map((element) => ({
      group: key,
      label: element.name,
      value: String(element.id),
    }))
  );

  return array.length === 0 ? [] : array;
};

const search = async (queryData: SearchArgumentsDTO) => {
  const { data } = await searchService.search(queryData);

  return select(data);
};

export const useSearch = (): UseMutationResult<UseSearchResult, unknown, SearchArgumentsDTO> =>
  useMutation(searchKey.details(), search);
