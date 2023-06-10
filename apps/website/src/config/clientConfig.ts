import { z } from 'zod';

import { Config } from './Config';

const schema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

// We need to explicitly define the type of environmentVariables because we are using NEXT_PUBLIC_* and they are not exposed to the browser
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
const environmentVariables = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

export const { config: clientConfig } = new Config(schema, environmentVariables);

export type ClientConfigEnvironmentVariables = z.infer<typeof schema>;
