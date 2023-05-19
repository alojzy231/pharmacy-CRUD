import { NumberInput, NumberInputProps } from '@mantine/core';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface ControlledNumberInputProps<TFieldValues extends FieldValues>
  extends Omit<NumberInputProps, 'error'> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
}

export function ControlledNumberInput<TFieldValues extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledNumberInputProps<TFieldValues>): JSX.Element {
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
          onChange={(number): void => onChange(number)}
          value={value as number}
          {...inputProps}
          {...hookFormInputProps}
        />
      )}
    />
  );
}
