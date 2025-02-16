"use client";

import { useEffect, useState } from "react";

import { getLocations, getProperties } from "@/api/services/propertiesService";
import SearchableDropdown from "@/components/searchDropdown";
import Dropdown from "@/components/dropdown";
import {
  categoryOptions,
  propertyTypeOptions,
} from "@/constants/filterOptions";
import RangeDropdown from "@/components/rangeDropdown";
import { MapIcon } from "@/components/icons";
import PropertyCard from "@/components/propertyCard";
import PageSwitch from "@/components/pageSwitch";

const PropertiesViewer = () => {
  const pageSize = 9;
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalpages] = useState(0);

  const [propertiesLoading, setPropertiesLoading] = useState(true);
  const [propertyFilter, setPropertyFilter] = useState<{
    location: string;
    type: string;
    category: string;
    priceRange: string;
    areaRange: string;
    zimmerRange: string;
  }>({
    location: "",
    type: "",
    category: "",
    priceRange: "",
    areaRange: "",
    zimmerRange: "",
  });
  const [properties, setProperties] = useState<
    Array<{
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
    }>
  >([]);

  const [locations, setLocations] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      const res = await getLocations();
      setLocations(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setPropertiesLoading(true);
        const res = await getProperties({
          pageNumber,
          pageSize,
          ...propertyFilter,
        });
        setProperties(res.properties);
        setTotalpages(res.totalPages);
      } catch (err) {
        console.error({ err });
      } finally {
        setPropertiesLoading(false);
      }
    })();
  }, [pageNumber]);

  useEffect(() => {
    (async () => {
      try {
        setPropertiesLoading(true);
        const res = await getProperties({
          pageNumber: 1,
          pageSize,
          ...propertyFilter,
        });
        setPageNumber(1);
        setProperties(res.properties);
        setTotalpages(res.totalPages);
      } catch (err) {
        console.error({ err });
      } finally {
        setPropertiesLoading(false);
      }
    })();
  }, [propertyFilter]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-3 px-3 mb-8">
          <div className="grid grid-cols-8 items-center gap-3 w-[95%]">
            <SearchableDropdown
              className="col-span-8 md:col-span-4 xl:col-span-3"
              placeholder="Berlin, Germany"
              options={locations}
              onItemChange={(item: string) =>
                setPropertyFilter((prev) => ({ ...prev, location: item }))
              }
            />
            <Dropdown
              className="col-span-8 md:col-span-4 xl:col-span-1"
              label="Category"
              options={categoryOptions}
              onItemChange={(item: { label: string; value: string }) =>
                setPropertyFilter((prev) => ({
                  ...prev,
                  category: item.value.trim() === "na" ? "" : item.value,
                }))
              }
            />
            <Dropdown
              className="col-span-8 md:col-span-4 xl:col-span-1"
              label="Type"
              options={propertyTypeOptions}
              onItemChange={(item: { label: string; value: string }) =>
                setPropertyFilter((prev) => ({
                  ...prev,
                  type: item.value.trim() === "na" ? "" : item.value,
                }))
              }
            />
            <RangeDropdown
              className="col-span-8 md:col-span-4 xl:col-span-1"
              label="Price"
              onItemChange={(item: string) =>
                setPropertyFilter((prev) => ({
                  ...prev,
                  priceRange: item.trim() === "0-0" ? "" : item.trim(),
                }))
              }
            />
            <RangeDropdown
              className="col-span-8 md:col-span-4 xl:col-span-1"
              label="Area"
              onItemChange={(item: string) =>
                setPropertyFilter((prev) => ({
                  ...prev,
                  areaRange: item.trim() === "0-0" ? "" : item.trim(),
                }))
              }
            />
            <RangeDropdown
              className="col-span-8 md:col-span-4 xl:col-span-1"
              label="Zimmer"
              onItemChange={(item: string) =>
                setPropertyFilter((prev) => ({
                  ...prev,
                  zimmerRange: item.trim() === "0-0" ? "" : item.trim(),
                }))
              }
            />
          </div>
          <button className="flex items-center justify-center border-2 border-gray-400 rounded-[4px] p-3 mb-2 w-full xl:w-auto">
            <MapIcon />
          </button>
        </div>
        {propertiesLoading ? (
          <div className="flex items-baseline gap-1 justify-center mt-12">
            <h1 className="text-2xl font-bold">Loading</h1>
            <h1 className="text-2xl font-bold animate-bounce">.</h1>
            <h1
              className="text-2xl font-bold animate-bounce"
              style={{ animationDelay: "0.3s" }}
            >
              .
            </h1>
            <h1
              className="text-2xl font-bold animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              .
            </h1>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 md:gap-10 justify-center">
            {properties?.length ? (
              properties?.map((property) => (
                <PropertyCard
                  key={property?._id}
                  title={property?.title}
                  area={property?.area}
                  city={property?.location?.split(",")[0].trim()}
                  pid={property?.id}
                  price={property.price}
                  rooms={property.number_of_beds}
                  views={property.number_of_views}
                  zimmer={property.zimmer}
                  type={property.type}
                  imageURL={property.image_url}
                />
              ))
            ) : (
              <p className="text-4xl text-center leading-snug">
                No data found...
                <br />
                Try changing filters!
              </p>
            )}
          </div>
        )}
        {!propertiesLoading && properties?.length ? (
          <div className="p-8 m-14 flex items-center justify-center">
            <PageSwitch
              currentPage={pageNumber}
              totalPages={totalPages}
              onPageChange={(pg: number) => setPageNumber(pg)}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PropertiesViewer;
