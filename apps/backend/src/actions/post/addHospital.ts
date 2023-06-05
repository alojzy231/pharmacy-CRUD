import { AddHospitalArgumentsDTO } from "@pharmacy-crud/dto";

import { prismaClient } from "@prismaClient";

export async function addHospital(
  data: AddHospitalArgumentsDTO
): Promise<void> {
  try {
    await prismaClient.hospital.create({
      data,
    });
  } catch (error) {
    console.error(`Error adding product: ${error}`);
  } finally {
    prismaClient.$disconnect();
  }
}
