import { GetProductResultDTO, UpdateProductArgumentsDTO } from '@dto';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Route } from '@const/route';
import { useUpdateProduct } from '@features/Dashboard/api/mutations/useUpdateProduct';
import { ProductForm } from '@features/Dashboard/view/ProductView/ProductForm';
import { WithGetUpdateDataResultData } from '@hocs/withGetUpdateData';

export function UpdateProductView({
  data,
  id,
}: WithGetUpdateDataResultData<GetProductResultDTO>): JSX.Element {
  const router = useRouter();
  const { isLoading, mutateAsync: updateProduct } = useUpdateProduct();

  const onSubmit = async (data: Omit<UpdateProductArgumentsDTO, 'id'>) => {
    await updateProduct({ ...data, id });

    router.push(Route.Product);
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
