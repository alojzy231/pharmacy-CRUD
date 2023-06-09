import { ActionIcon, createStyles, Loader, Menu } from '@mantine/core';
import { IconDots, IconEdit, IconTrash } from '@tabler/icons-react';
import NextLink from 'next/link';

const useStyles = createStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

type TableMenuProps = {
  onRemove: () => void;
  href: string;
  isLoading?: boolean;
};

export function TableMenu({ href, isLoading, onRemove }: TableMenuProps): JSX.Element {
  const { classes } = useStyles();

  if (isLoading) return <Loader size={16} />;

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <IconDots />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <NextLink className={classes.link} href={href}>
          <Menu.Item icon={<IconEdit size={14} />}>Edit</Menu.Item>
        </NextLink>
        <Menu.Item color="red" icon={<IconTrash size={14} />} onClick={onRemove}>
          Remove
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
