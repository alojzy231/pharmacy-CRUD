import { Button } from '@mantine/core';

type FormButtonProps = {
  isLoading: boolean;
  onAddUser: () => void;
  isFormActive: boolean;
};
export function FormButton({ isFormActive, isLoading, onAddUser }: FormButtonProps): JSX.Element {
  return (
    <Button
      loading={isLoading}
      onClick={isFormActive ? undefined : onAddUser}
      type={isFormActive ? 'submit' : undefined}
      variant="outline"
      w="fit-content"
    >
      {isFormActive ? 'Save' : 'Add User'}
    </Button>
  );
}
