import { ProductCategory, ProductType } from '@dto';
import z from 'zod';

export const schema = z.object({
  category: z.nativeEnum(ProductCategory),
  doctorId: z.string().min(1).transform(Number),
  isPrescriptionNeeded: z.boolean(),
  name: z.string().min(1),
  price: z.number().min(0.1),
  quantity: z.number().min(1).step(1),
  type: z.nativeEnum(ProductType),
});

export type FieldValues = z.infer<typeof schema>;

type DefaultValues = Omit<FieldValues, 'category' | 'type' | 'doctorId'> & {
  category: ProductCategory | undefined;
  type: ProductType | undefined;
  doctorId: number | undefined;
};

export const defaultValues: DefaultValues = {
  category: undefined,
  doctorId: undefined,
  isPrescriptionNeeded: false,
  name: '',
  price: 0,
  quantity: 1,
  type: undefined,
};
