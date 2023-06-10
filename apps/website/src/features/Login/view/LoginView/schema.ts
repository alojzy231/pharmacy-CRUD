import z from 'zod';

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type FieldValues = z.infer<typeof schema>;

export const defaultValues: FieldValues = {
  email: '',
  password: '',
};
