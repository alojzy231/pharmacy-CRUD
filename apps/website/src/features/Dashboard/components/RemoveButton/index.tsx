import { Button, ButtonProps } from '@mantine/core';

export function RemoveButton(
  props: Omit<ButtonProps, 'gradient' | 'variant' | 'size'>
): JSX.Element {
  return (
    <Button gradient={{ from: 'orange', to: 'red' }} size="xs" variant="gradient" {...props}>
      Remove
    </Button>
  );
}
