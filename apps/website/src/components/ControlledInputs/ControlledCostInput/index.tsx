import { NumberInput, NumberInputProps } from '@mantine/core';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface ControlledCostInputProps<TFieldValues extends FieldValues>
  extends Omit<NumberInputProps, 'error' | 'formatter' | 'parser' | 'precision'> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
}

export function ControlledCostInput<TFieldValues extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledCostInputProps<TFieldValues>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ...hookFormInputProps },
        fieldState: { error },
      }): JSX.Element => (
        <NumberInput
          error={error?.message}
          formatter={(value) =>
            Number.isNaN(Number.parseFloat(value))
              ? '$ '
              : `$ ${value}`.replaceAll(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          }
          onChange={(number): void => onChange(number)}
          parser={(value) => value.replaceAll(/\$\s?|(,*)/g, '')}
          precision={2}
          value={value as number}
          {...inputProps}
          {...hookFormInputProps}
        />
      )}
    />
  );
}
