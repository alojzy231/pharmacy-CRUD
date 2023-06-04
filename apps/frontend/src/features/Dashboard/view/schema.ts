import { ProductCategory, ProductType } from '@pharmacy-crud/dto';
import z from 'zod';

export const schema = z.object({
  category: z.nativeEnum(ProductCategory),
  isPrescriptionNeeded: z.boolean(),
  name: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
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
  quantity: 0,
  type: undefined,
};
