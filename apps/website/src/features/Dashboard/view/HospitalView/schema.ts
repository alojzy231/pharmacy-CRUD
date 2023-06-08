import z from 'zod';

export const schema = z.object({
  city: z.string().min(1),
  name: z.string().min(1),
  streetName: z.string().min(1),
});

export type FieldValues = z.infer<typeof schema>;

export const defaultValues: FieldValues = {
  city: '',
  name: '',
  streetName: '',
};
