import axiosClient from "../client";
import { PropertyTypes } from "../types/propertyTypes";

interface getPropertiesTypes {
  pageNumber?: number;
  pageSize?: number;
  location?: string;
  category?: string;
  type?: string;
  priceRange?: string;
  areaRange?: string;
  zimmerRange?: string;
}

export const getProperties = async ({
  pageNumber = 1,
  pageSize = 9,
  location = "",
  category = "",
  type = "",
  priceRange = "",
  areaRange = "",
  zimmerRange = "",
}: getPropertiesTypes): Promise<PropertyTypes> => {
  const response = await axiosClient.get<PropertyTypes>("/", {
    params: {
      pageNumber,
      pageSize,
      location,
      category,
      type,
      priceRange,
      areaRange,
      zimmerRange,
    },
  });
  return response.data;
};

export const getLocations = async (): Promise<Array<string>> => {
  const response = await axiosClient.get<Array<string>>("/locations");
  return response.data;
};
