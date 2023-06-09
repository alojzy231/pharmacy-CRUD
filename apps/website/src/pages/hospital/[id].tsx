import { getHospital, hospitalKey } from '@features/Dashboard/api/queries/useGetHospital';
import { withGetUpdateData } from '@hocs/withGetUpdateData';

export { UpdateHospitalView as default } from '@features/Dashboard/view/HospitalView/UpdateHospitalView';

export const getServerSideProps = withGetUpdateData(hospitalKey.details(), getHospital);
