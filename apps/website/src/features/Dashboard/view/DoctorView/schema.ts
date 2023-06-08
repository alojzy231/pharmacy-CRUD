import { Profession } from '@dto';
import z from 'zod';

export const schema = z.object({
  hospitalId: z.string().min(1),
  lastName: z.string().min(1),
  name: z.string().min(1),
  profession: z.nativeEnum(Profession),
});

export type FieldValues = z.infer<typeof schema>;

type DefaultValues = Omit<FieldValues, 'profession' | 'hospitalId'> & {
  profession: Profession | undefined;
  hospitalId: number | undefined;
};

export const defaultValues: DefaultValues = {
  hospitalId: undefined,
  lastName: '',
  name: '',
  profession: undefined,
};
