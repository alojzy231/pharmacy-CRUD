import { Group, Text } from '@mantine/core';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FieldValues } from 'react-hook-form';

import { ControlledSelect, ControlledSelectInputProps } from '@components/ControlledInputs';

import {
  useGetHospitalsSelectInputData,
  UseGetHospitalsSelectInputDataResult,
} from './useGetHospitalsSelectInputData';

type ItemComponentProps = ComponentPropsWithoutRef<'div'> &
  UseGetHospitalsSelectInputDataResult[number];

const ItemComponent = forwardRef<HTMLDivElement, ItemComponentProps>(function ItemComponent(
  { description, label, ...restProps }: ItemComponentProps,
  reference
): JSX.Element {
  return (
    <div ref={reference} {...restProps}>
      <Group noWrap>
        <div>
          <Text size="sm">{label}</Text>
          <Text opacity={0.65} size="xs">
            {description}
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
