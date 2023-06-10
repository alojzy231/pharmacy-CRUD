import { ProductType, ProductCategory } from '@dto';
import { convertToSelectData } from '@utils/convertToSelectData';

export const TYPES = Object.values(ProductType).map((element) => convertToSelectData(element));
export const CATEGORIES = Object.values(ProductCategory).map((element) =>
  convertToSelectData(element)
);
