import { TextInput, TextInputProps } from '@mantine/core';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface ControlledTextInputProps<TFieldValues extends FieldValues>
  extends Omit<TextInputProps, 'error'> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
}

export function ControlledTextInput<TFieldValues extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledTextInputProps<TFieldValues>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: hookFormInputProps, fieldState: { error } }): JSX.Element => (
        <TextInput error={error?.message} {...inputProps} {...hookFormInputProps} />
      )}
    />
  );
}
