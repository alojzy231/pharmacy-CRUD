import { z } from 'zod';

import { Config } from './Config';

const schema = z.object({
  ACCESS_TOKEN_SECRET: z.string(),
  DATABASE_URL: z.string(),
  NEXT_PUBLIC_API_URL: z.string(),
});

// We need to explicitly define the type of environmentVariables because we are using NEXT_PUBLIC_* and they are not exposed to the browser
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
const environmentVariables = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

export const { config: apiConfig } = new Config(schema, environmentVariables);

export type ApiConfigEnvironmentVariables = z.infer<typeof schema>;
