import { z } from 'zod';

import { Config } from './Config';

const schema = z.object({
  ACCESS_TOKEN_SECRET: z.string(),
  DATABASE_URL: z.string(),
});

export const { config: serverConfig } = new Config(schema);

export type ServerConfigEnvironmentVariables = z.infer<typeof schema>;
