import { Autocomplete } from '@mantine/core';
import { useDeferredValue, useEffect, useState } from 'react';

import { useSearch } from './useSearch';

export default function SearchBar(): JSX.Element {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const { data, isLoading, mutateAsync: search } = useSearch();

  useEffect(() => {
    if (!isLoading && !!deferredQuery) {
      search({ query: deferredQuery });
    }
  }, [deferredQuery]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Autocomplete
      data={data ?? [{ group: 'loading', label: 'Loading...', value: 'loading' }]}
      mr={12}
      my="auto"
      onChange={setQuery}
      placeholder="Search"
      w={200}
    />
  );
}
