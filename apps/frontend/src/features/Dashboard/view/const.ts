import { ProductCategorySchema, ProductTypeSchema } from '@pharmacy-crud/dto';

import { convertEnumToString } from '@utils/convertEnumToString';

function convertToSelectData(option: string): { label: string; value: string } {
  return { label: convertEnumToString(option), value: option };
}

export const TYPES = ProductTypeSchema.options.map((element) => convertToSelectData(element));
export const CATEGORIES = ProductCategorySchema.options.map((element) =>
  convertToSelectData(element)
);
