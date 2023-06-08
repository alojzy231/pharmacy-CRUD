import { prismaClient } from '@config/prismaClient';
import { SearchArgumentsDTO, Product, Hospital } from '@dto';
import { Doctor } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

async function searchInProducts(query: string): Promise<Product[]> {
  return prismaClient.product.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
}
async function searchInHospitals(query: string): Promise<Hospital[]> {
  const cityData = await prismaClient.hospital.findMany({
    where: {
      city: {
        contains: query,
      },
    },
  });

  const nameData = await prismaClient.hospital.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });

  return [...cityData, ...nameData];
}
async function searchInDoctors(query: string): Promise<Doctor[]> {
  const nameData = await prismaClient.doctor.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });

  const lastNameData = await prismaClient.doctor.findMany({
    where: {
      lastName: {
        contains: query,
      },
    },
  });

  return [...lastNameData, ...nameData];
}

function mapThroughQuery(
  query: string,
  functionToMap: (query: string) => Promise<Product[] | Hospital[] | Doctor[]>
) {
  return Promise.all(query.split(' ').map((element) => functionToMap(element))).then((data) =>
    data.flat()
  );
}

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'POST') return response.status(405).end();

  const {
    data: { query },
  }: { data: SearchArgumentsDTO } = request.body;

  try {
    const productData = await mapThroughQuery(query, searchInProducts);

    const hospitalData = await mapThroughQuery(query, searchInHospitals);

    const doctorData = await mapThroughQuery(query, searchInDoctors);

    prismaClient.$disconnect();

    return response.status(200).json({
      doctor: doctorData,
      hospital: hospitalData,
      product: productData,
    });
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error while searching: ${error}`);

    return response.status(500).json({ error, message: 'Error while searching' });
  }
}
