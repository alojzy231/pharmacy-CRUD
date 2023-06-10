import { UpdateProductArgumentsDTO } from '@dto';
import { router } from 'next/client';

import { Route } from '@const/route';
import { useUpdateProduct } from '@features/Dashboard/api/mutations/useUpdateProduct';
import { useGetProduct } from '@features/Dashboard/api/queries/useGetProduct';
import { ProductForm } from '@features/Dashboard/view/MainView/ProductForm';

type FormProps = {
  id: string;
};
export function Form({ id }: FormProps): JSX.Element {
  const { isLoading, mutateAsync: updateProduct } = useUpdateProduct();
  const { data } = useGetProduct({ id });

  const onSubmit = async (data: Omit<UpdateProductArgumentsDTO, 'id'>) => {
    await updateProduct({ ...data, id });

    router.push(Route.Product);
  };

  return (
    <>
      {data ? (
        <ProductForm defaultValues={data} isLoading={isLoading} onSubmitCallback={onSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
