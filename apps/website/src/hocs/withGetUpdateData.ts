import { QueryClient, QueryKey } from '@tanstack/react-query';
import { GetServerSidePropsResult, NextPageContext } from 'next';

import { Route } from '@const/route';

export type WithGetUpdateDataResultData<TData> = {
  id: string;
  data: TData;
};

export function withGetUpdateData<TData>(
  queryKey: QueryKey,
  queryFunction: ({ id }: { id: string }) => Promise<TData>
): (
  context: NextPageContext
) => Promise<GetServerSidePropsResult<WithGetUpdateDataResultData<TData>>> {
  return async function (context) {
    const { id } = context.query;

    if (typeof id !== 'string') {
      return {
        redirect: {
          destination: Route.Dashboard,
          permanent: true,
        },
      };
    }

    const queryClient = new QueryClient();

    const data = await queryClient.fetchQuery({
      queryFn: () => queryFunction({ id }),
      queryKey,
    });

    return {
      props: {
        data,
        id,
      },
    };
  };
}
