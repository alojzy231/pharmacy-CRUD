export function convertEnumToString(enumName: string | undefined): string {
  return String(enumName).toLowerCase().replace('_', ' ');
}
