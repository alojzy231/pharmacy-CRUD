import { UpdateProductArgumentsDTO } from '@dto';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Route } from '@const/route';
import { useUpdateProduct } from '@features/Dashboard/api/mutations/useUpdateProduct';
import { useGetProduct } from '@features/Dashboard/api/queries/useGetProduct';
import { ProductForm } from '@features/Dashboard/view/MainView/ProductForm';

type UpdateProductViewProps = {
  id: string;
};
export function UpdateProductView({ id }: UpdateProductViewProps): JSX.Element {
  const router = useRouter();
  const { isLoading, mutateAsync: updateProduct } = useUpdateProduct();
  const { data } = useGetProduct({ id });

  const onSubmit = async (data: Omit<UpdateProductArgumentsDTO, 'id'>) => {
    await updateProduct({ ...data, id });

    router.push(Route.Dashboard);
  };

  return (
    <>
      <Title mx="auto">Update product</Title>
      {data ? (
        <ProductForm defaultValues={data} isLoading={isLoading} onSubmitCallback={onSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
