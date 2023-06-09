import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Form } from './Form';

export function UpdateProductView(): JSX.Element {
  const { query } = useRouter();

  return (
    <>
      <Title mx="auto">Update product</Title>
      {typeof query.id === 'string' ? <Form id={query.id} /> : 'Loading...'}
    </>
  );
}
