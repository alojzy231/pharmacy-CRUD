import { ClientConfigEnvironmentVariables } from '@config/clientConfig';
import { ServerConfigEnvironmentVariables } from '@config/serverConfig';

declare global {
  namespace NodeJS {
    type ProcessEnv = ClientConfigEnvironmentVariables & ServerConfigEnvironmentVariables;
  }
}

export {};
