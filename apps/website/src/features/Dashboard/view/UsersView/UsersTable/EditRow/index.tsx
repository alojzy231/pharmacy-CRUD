import { Button } from '@mantine/core';
import { Control, FieldValues, Path } from 'react-hook-form';

import { ControlledSelect, ControlledTextInput } from '@components/ControlledInputs';
import { ROLES } from '@features/Dashboard/view/UsersView/UsersTable/EditRow/const';

type EditRowProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  names: {
    name: Path<TFieldValues>;
    email: Path<TFieldValues>;
    role: Path<TFieldValues>;
    password: Path<TFieldValues>;
  };
  isLoading?: boolean;
  onCancel: () => void;
};
export function EditRow<TFieldValues extends FieldValues>({
  control,
  isLoading,
  names,
  onCancel,
}: EditRowProps<TFieldValues>): JSX.Element {
  return (
    <tr>
      <td>
        <ControlledTextInput control={control} name={names.name} placeholder="Name" />
      </td>
      <td>
        <ControlledTextInput control={control} name={names.email} placeholder="Email" />
      </td>
      <td>
        <ControlledSelect control={control} data={ROLES} name={names.role} placeholder="Role" />
      </td>
      <td>
        <ControlledTextInput
          control={control}
          name={names.password}
          placeholder="password"
          type="password"
        />
      </td>
      <td>
        <Button disabled={isLoading} onClick={onCancel} size="xs" variant="subtle">
          Cancel
        </Button>
      </td>
    </tr>
  );
}
