import { Role } from '@dto';
import z from 'zod';

export const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(1),
  role: z.nativeEnum(Role),
});

export type FieldValues = z.infer<typeof schema>;

type DefaultValues = Omit<FieldValues, 'role'> & {
  role: Role | undefined;
};

export const defaultValues: DefaultValues = {
  email: '',
  name: '',
  password: '',
  role: undefined,
};
