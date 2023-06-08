import { Button } from '@mantine/core';

type RemoveButtonProps = {
  onClick: () => void;
};

export function RemoveButton(props: RemoveButtonProps): JSX.Element {
  return (
    <Button gradient={{ from: 'orange', to: 'red' }} size="xs" variant="gradient" {...props}>
      Remove
    </Button>
  );
}
