import { z } from 'zod';

export const ProductCategorySchema = z.enum([
  'ANTIBIOTIC',
  'ANTIVIRAL',
  'ANTIFUNGAL',
  'ANTIPARASITIC',
  'ANTIPYRETIC',
  'ANALGESIC',
  'ANESTHETIC',
  'ANTISEPTIC',
  'DISINFECTANT',
  'ANTACID',
  'LAXATIVE',
  'DIURETIC',
  'HORMONE',
  'VITAMIN',
  'MINERAL',
  'NUTRITIONAL_SUPPLEMENT',
  'OTHER',
]);
