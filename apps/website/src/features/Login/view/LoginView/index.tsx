import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { ControlledTextInput } from '@components/ControlledInputs';

import { defaultValues, FieldValues, schema } from './schema';

const onSubmit = (data: FieldValues) => console.log(data);

export function LoginView(): JSX.Element {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Title mx="auto">Login</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack maw={320} mt={64} mx="auto" spacing={24}>
          <ControlledTextInput control={control} label="Email" name="email" placeholder="email" />
          <ControlledTextInput
            control={control}
            label="Password"
            name="password"
            placeholder="password"
            type="password"
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </>
  );
}
