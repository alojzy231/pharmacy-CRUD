import { Select, SelectProps } from '@mantine/core';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

export interface ControlledSelectInputProps<TFieldValues extends FieldValues>
  extends Omit<SelectProps, 'error'> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
}

export function ControlledSelect<TFieldValues extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledSelectInputProps<TFieldValues>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: hookFormInputProps, fieldState: { error } }): JSX.Element => (
        <Select error={error?.message} {...inputProps} {...hookFormInputProps} />
      )}
    />
  );
}
