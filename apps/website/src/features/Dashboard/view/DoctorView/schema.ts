import z from 'zod';

export const schema = z.object({
  address: z.string().min(1),
  city: z.string().min(1),
  name: z.string().min(1),
  streetName: z.string().min(1),
});

export type FieldValues = z.infer<typeof schema>;

export const defaultValues: FieldValues = {
  address: '',
  city: '',
  name: '',
  streetName: '',
};
