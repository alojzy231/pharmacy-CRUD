import { GetServerSidePropsResult, NextPageContext } from 'next';

import { verifyAccessToken } from '@api/utils/verifyAccessToken';
import { Route } from '@const/route';

export async function withAdminPermission(
  context: NextPageContext
): Promise<GetServerSidePropsResult<NonNullable<unknown>>> {
  try {
    const { payload } = await verifyAccessToken(undefined, context);

    if (payload.role !== 'ADMIN') {
      return {
        redirect: {
          destination: Route.Product,
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error(error);

    return {
      redirect: {
        destination: Route.Product,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
