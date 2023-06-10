import { ApiConfigEnvironmentVariables } from '@config/apiConfig';

declare global {
  namespace NodeJS {
    type ProcessEnv = ApiConfigEnvironmentVariables;
  }
}

export {};
