import { Checkbox, CheckboxProps } from '@mantine/core';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface ControlledCheckboxProps<TFieldValues extends FieldValues>
  extends Omit<CheckboxProps, 'error'> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
}

export function ControlledCheckbox<TFieldValues extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledCheckboxProps<TFieldValues>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: hookFormInputProps, fieldState: { error } }): JSX.Element => (
        <Checkbox error={error?.message} {...inputProps} {...hookFormInputProps} />
      )}
    />
  );
}
