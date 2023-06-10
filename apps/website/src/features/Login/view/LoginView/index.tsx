import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { ControlledTextInput } from '@components/ControlledInputs';
import { Route } from '@const/route';
import { useLogin } from '@features/Login/api/mutations/useLogin';

import { defaultValues, FieldValues, schema } from './schema';

export function LoginView(): JSX.Element {
  const { isLoading, mutateAsync: login } = useLogin();
  const router = useRouter();

  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      await login(data);

      router.push(Route.Product);
    } catch (error) {
      console.error(error);
    }
  };

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
          <Button loading={isLoading} type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
