import { getProduct, productKey } from '@features/Dashboard/api/queries/useGetProduct';
import { withGetUpdateData } from '@hocs/withGetUpdateData';

export { UpdateProductView as default } from '@features/Dashboard/view/ProductView/UpdateProductView';

export const getServerSideProps = withGetUpdateData(productKey.details(), getProduct);
