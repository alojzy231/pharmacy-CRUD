import { z, ZodObject, ZodRawShape } from 'zod';

// To not define all environment variables in environment.d.ts we can use this type generic to mark them as possibly undefined
// we still validate them against schema so we can be sure that they are defined (the error will be thrown if not)
// we'll only use this type for process.env.NEXT_PUBLIC_* variables (client-side envs)
type PossiblyUndefined<T> = {
  [K in keyof T]: T[K] | undefined;
};

export class Config<TValidationSchema extends ZodObject<ZodRawShape>> {
  config: z.infer<TValidationSchema>;
  private validationSchema: TValidationSchema;

  private validate<TConfig>(config: TConfig): this['config'] {
    const result = this.validationSchema.safeParse(config);

    if (!result.success) {
      if (typeof window === 'undefined') {
        throw new TypeError(`Configuration validation error: ${result.error.message}`);
      }

      return {} as this['config'];
    }

    return result.data;
  }

  // Pass environmentVariables object to validate against it instead of process.env
  // is needed if we want to validate client-side envs
  // (by default they are not exposed to the browser if you don't declare them explicitly e.g. NEXT_PUBLIC_*)
  // https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
  constructor(
    validationSchema: TValidationSchema,
    environmentVariables?: PossiblyUndefined<z.infer<TValidationSchema>>
  ) {
    this.validationSchema = validationSchema;
    this.config = this.validate(environmentVariables || process.env);
  }
}
