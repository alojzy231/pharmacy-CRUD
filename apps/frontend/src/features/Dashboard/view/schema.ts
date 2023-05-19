import z from 'zod';

export const schema = z.object({
  category: z.string().min(1),
  isPrescriptionNeeded: z.boolean(),
  name: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
  type: z.string().min(1),
});

export type FieldValues = z.infer<typeof schema>;

export const defaultValues: FieldValues = {
  category: '',
  isPrescriptionNeeded: false,
  name: '',
  price: 0,
  quantity: 0,
  type: '',
};
