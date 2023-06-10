import { Group, Loader, TextInput } from '@mantine/core';
import { spotlight, SpotlightProvider } from '@mantine/spotlight';

import { useGetAll } from './useGetAll';

export default function SearchBar(): JSX.Element {
  const { data, isLoading } = useGetAll();

  if (data === undefined || isLoading)
    return (
      <Group align="center" position="center" w={212}>
        <Loader size={16} />
      </Group>
    );

  return (
    <SpotlightProvider
      actions={data}
      nothingFoundMessage="Nothing found..."
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <TextInput mr={12} my="auto" onClick={spotlight.open} placeholder="Search" w={200} />
    </SpotlightProvider>
  );
}
