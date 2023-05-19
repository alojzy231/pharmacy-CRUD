import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { defaultValues, FieldValues, schema } from './schema';

export function MainView(): JSX.Element {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => console.log(data);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name')} />
      <br />
      <label>Category</label>
      <input {...register('category')} />
      <br />
      <label>Price</label>
      <input type="number" {...register('price')} />
      <br />
      <label>Quantity</label>
      <input type="number" {...register('quantity')} />
      <br />
      <label>Type</label>
      <input {...register('type')} />
      <br />
      <button>Submit</button>
    </form>
  );
}
