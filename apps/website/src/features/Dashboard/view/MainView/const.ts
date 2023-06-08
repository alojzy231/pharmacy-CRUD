import { ProductType, ProductCategory } from '@dto';
import { convertEnumToString } from '@utils/convertEnumToString';

function convertToSelectData(option: string): { label: string; value: string } {
  return { label: convertEnumToString(option), value: option };
}

export const TYPES = Object.values(ProductType).map((element) => convertToSelectData(element));
export const CATEGORIES = Object.values(ProductCategory).map((element) =>
  convertToSelectData(element)
);
