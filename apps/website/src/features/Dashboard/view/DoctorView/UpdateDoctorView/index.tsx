import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Form } from './Form';

export function UpdateDoctorView(): JSX.Element {
  const { query } = useRouter();

  return (
    <>
      <Title mx="auto">Update doctor</Title>
      {typeof query.id === 'string' ? <Form id={query.id} /> : 'Loading...'}
    </>
  );
}
