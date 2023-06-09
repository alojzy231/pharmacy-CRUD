import { Box, TextInput } from '@mantine/core';
import { spotlight, SpotlightProvider } from '@mantine/spotlight';

import { useGetAll } from './useGetAll';

export default function SearchBar(): JSX.Element {
  const { data } = useGetAll();

  if (data === undefined) return <Box w={212}>Loading...</Box>;

  return (
    <SpotlightProvider
      actions={data}
      nothingFoundMessage="Nothing found..."
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <TextInput mr={12} my="auto" onClick={spotlight.open} placeholder="Search" w={200} />;
    </SpotlightProvider>
  );
}
