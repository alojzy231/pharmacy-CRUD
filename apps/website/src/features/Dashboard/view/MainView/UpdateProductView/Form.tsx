import { useAddProduct } from '@features/Dashboard/api/mutations/useAddProduct';
import { useGetProduct } from '@features/Dashboard/api/queries/useGetProduct';
import { ProductForm } from '@features/Dashboard/view/MainView/ProductForm';

type FormProps = {
  id: string;
};
export function Form({ id }: FormProps): JSX.Element {
  const { isLoading, mutateAsync: addProduct } = useAddProduct();
  const { data } = useGetProduct({ id });

  return (
    <>
      {data ? (
        <ProductForm defaultValues={data} isLoading={isLoading} onSubmitCallback={addProduct} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
