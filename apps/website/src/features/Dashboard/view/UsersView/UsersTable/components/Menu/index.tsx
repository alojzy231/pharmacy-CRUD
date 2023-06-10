import { ActionIcon, Loader, Menu as MantineMenu } from '@mantine/core';
import { IconDots, IconEdit, IconTrash } from '@tabler/icons-react';

type TableMenuProps = {
  onRemove: () => void;
  onEdit: () => void;
  isLoading?: boolean;
  isAdmin: boolean;
};

export function Menu({ isAdmin, isLoading, onEdit, onRemove }: TableMenuProps): JSX.Element {
  if (isLoading) return <Loader size={16} />;

  return (
    <MantineMenu shadow="md" width={200}>
      <MantineMenu.Target>
        <ActionIcon>
          <IconDots />
        </ActionIcon>
      </MantineMenu.Target>

      <MantineMenu.Dropdown>
        <MantineMenu.Item icon={<IconEdit size={14} />} onClick={onEdit}>
          Edit
        </MantineMenu.Item>
        {!isAdmin && (
          <MantineMenu.Item color="red" icon={<IconTrash size={14} />} onClick={onRemove}>
            Remove
          </MantineMenu.Item>
        )}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
}
