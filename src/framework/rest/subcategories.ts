import {
  Subcategory,
  SubcategoryQueryOptionsType
} from "@type/index";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import {
  useQuery,
} from "react-query";
import { mapPaginatorData } from "@framework/utils/data-mappers";
import client from '@framework/utils/index'
import { useRouter } from 'next/router';
import axios from "axios";
import invariant from "tiny-invariant";



export const useSubcategories = (options: SubcategoryQueryOptionsType) => {
  const { locale } = useRouter();
  const formattedOptions = {
    ...options,
    language: locale,
  };
  const { data, isLoading, error } = useQuery<Subcategory[], Error>(
    [API_ENDPOINTS.SUBCATEGORIES, formattedOptions],
    ({ queryKey, pageParam }) =>
      client.allsubcategory.find(Object.assign({}, queryKey[1], pageParam)),
    {
      keepPreviousData: true,
    }
  );

  return {
    data: data ?? [],
    isLoading,
    error,
  };
};