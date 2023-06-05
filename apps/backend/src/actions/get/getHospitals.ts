import { GetHospitalsResultDTO } from "@pharmacy-crud/dto";

import { prismaClient } from "@prismaClient";

export const getHospitals = async (): Promise<
  GetHospitalsResultDTO | undefined
> => {
  try {
    return await prismaClient.hospital.findMany();
  } catch (error) {
    console.error(`Error getting all products: ${error}`);
  } finally {
    prismaClient.$disconnect();
  }
};
