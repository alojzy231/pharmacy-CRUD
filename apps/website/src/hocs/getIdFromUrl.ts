import { NextPageContext } from 'next';

import { Route } from '@const/route';

type GetIdFromUrlFromUrlResult =
  | {
      props: {
        id: string;
      };
    }
  | {
      redirect: {
        destination: string;
        permanent: boolean;
      };
    };

export function getIdFromUrl(context: NextPageContext): GetIdFromUrlFromUrlResult {
  const { id } = context.query;

  if (typeof id !== 'string') {
    return {
      redirect: {
        destination: Route.Dashboard,
        permanent: true,
      },
    };
  }

  return { props: { id } };
}
