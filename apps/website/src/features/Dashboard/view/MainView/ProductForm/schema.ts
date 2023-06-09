import { ProductCategory, ProductType } from '@dto';
import z from 'zod';

export const schema = z.object({
  category: z.nativeEnum(ProductCategory),
  isPrescriptionNeeded: z.boolean(),
  name: z.string().min(1),
  price: z.number().min(0.1),
  quantity: z.number().min(1).step(1),
  type: z.nativeEnum(ProductType),
});

export type FieldValues = z.infer<typeof schema>;

type DefaultValues = Omit<FieldValues, 'category' | 'type'> & {
  category: ProductCategory | undefined;
  type: ProductType | undefined;
};

export const defaultValues: DefaultValues = {
  category: undefined,
  isPrescriptionNeeded: false,
  name: '',
  price: 0,
  quantity: 1,
  type: undefined,
};
