import {
  Banner,
  BannerQueryOptionsType
} from "@type/index";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import {
  useQuery,
} from "react-query";
import client from '@framework/utils/index'
import { useRouter } from 'next/router';

export const useBanners = (options: BannerQueryOptionsType) => {
  const { locale } = useRouter();
  
  const formattedOptions = {
    ...options,
    language: locale,
  };
  
  const { data, isLoading, error } = useQuery<Banner[], Error>(
    [API_ENDPOINTS.BANNERS, formattedOptions],() =>
      client.allbanner.find(),
    {
      keepPreviousData: true,
    }
  );

  return {
    data: data?.data ?? [],
    isLoading,
    error,
  };

};