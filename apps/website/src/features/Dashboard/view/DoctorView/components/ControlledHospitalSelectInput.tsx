import { Group, Text } from '@mantine/core';
import { forwardRef } from 'react';
import { FieldValues } from 'react-hook-form';

import { ControlledSelect, ControlledSelectInputProps } from '@components/ControlledInputs';
import { useGetHospitalsSelectInputData } from '@features/Dashboard/api/queries/useGetHospitalsSelectInputData';

type ItemComponentProps = {
  name: string;
  city: string;
  streetName: string;
  address: string;
};

const ItemComponent = forwardRef<HTMLDivElement, ItemComponentProps>(function ItemComponent(
  { address, city, name, streetName, ...restProps }: ItemComponentProps,
  reference
): JSX.Element {
  return (
    <div ref={reference} {...restProps}>
      <Group noWrap>
        <div>
          <Text size="sm">{name}</Text>
          <Text opacity={0.65} size="xs">
            {city} {streetName} {address}
          </Text>
        </div>
      </Group>
    </div>
  );
});

type ControlledHospitalSelectInputProps<TFieldValues extends FieldValues> = Omit<
  ControlledSelectInputProps<TFieldValues>,
  'itemComponent' | 'data'
>;
export function ControlledHospitalSelectInput<TFieldValues extends FieldValues>(
  props: ControlledHospitalSelectInputProps<TFieldValues>
): JSX.Element {
  const { data, isLoading } = useGetHospitalsSelectInputData();

  return (
    <ControlledSelect
      data={data ?? []}
      disabled={isLoading}
      itemComponent={ItemComponent}
      {...props}
    />
  );
}
