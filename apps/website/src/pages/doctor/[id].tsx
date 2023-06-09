import { doctorKey, getDoctor } from '@features/Dashboard/api/queries/useGetDoctor';
import { withGetUpdateData } from '@hocs/withGetUpdateData';

export { UpdateDoctorView as default } from '@features/Dashboard/view/DoctorView/UpdateDoctorView';

export const getServerSideProps = withGetUpdateData(doctorKey.details(), getDoctor);
