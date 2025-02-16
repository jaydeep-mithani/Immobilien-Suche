export interface PropertyTypes {
  pageNumber: number;
  pageSize: number;
  properties: Array<{
    _id: string;
    id: number;
    type: string;
    category: string;
    price: number;
    area: number;
    zimmer: number;
    location: string;
    title: string;
    number_of_beds: number;
    number_of_views: number;
    image_url: string;
  }>;
  totalPages: number;
  totalProperties: number;
}
