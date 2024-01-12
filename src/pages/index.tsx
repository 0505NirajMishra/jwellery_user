import BannerCard from '@components/common/banner-card';
import Container from '@components/ui/container';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlock from '@containers/category-block';
import { getLayout } from '@components/layout/layout';
import BannerWithProducts from '@containers/banner-with-products';
import BannerBlock from '@containers/banner-block';
import Divider from '@components/ui/divider';
import DownloadApps from '@components/common/download-apps';
import Support from '@components/common/support';
import Instagram from '@components/common/instagram';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import ProductsFeatured from '@containers/products-featured';
import BannerSliderBlock from '@containers/banner-slider-block';
import ExclusiveBlock from '@containers/exclusive-block';
import Subscription from '@components/common/subscription';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import { ROUTES } from '@lib/routes';
// import {
//   masonryBanner,
//   promotionBanner,
//   modernDemoBanner as banner,
//   modernDemoProductBanner as productBanner,
// } from '@data/static/banners';
import NewBlock from '@containers/hero-block';
import FlashSaleBlock from '@components/product/feeds/flash-sale-product-feed';
import BannerCarouselBlock from '@containers/banner-carousel-block';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
export { getStaticProps } from '@framework/homepage/modern';

import {
  standardDemoBanner as banner,
  standardDemoHeroBanner as heroBanner,
  standardDemoPromotionBanner as promotionalBanner,
} from '@data/static/banners';
import { useEffect } from 'react';
import { useBanners } from '@framework/banners';
import { isEmpty } from 'lodash';
import NotFoundItem from '@components/404/not-found-item';
import HeroBlock from '@containers/hero-block';

export default function Home() {

  const {
		data: ban,
		isLoading: loading,
		error,
	} = useBanners({
		limit: 10,
		parent: null,
	});

  useEffect(() =>{
      console.log("my data is =>" + JSON.stringify(ban));
  },[])

  return (
    <>
      {/* <BannerBlock data={masonryBanner} />
      <Container>
        <ProductsFlashSaleBlock />
      </Container>
      <BannerSliderBlock data={promotionBanner} />
      <Container>
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          variant="rounded"
        />
        <ProductsFeatured sectionHeading="text-featured-products" />
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.15/1]"
        /> */}
      {/* <BrandGridBlock sectionHeading="text-top-brands" /> */}
      {/* <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[4.3/1]"
        /> */}
      {/* <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productBanner}
        /> */}
      {/* <ExclusiveBlock /> */}
      {/* <NewArrivalsProductFeed /> */}
      {/* <DownloadApps /> */}
      {/* <Support />
        <Instagram />
        <Subscription className="px-5 py-12 bg-opacity-0 sm:px-16 xl:px-0 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" /> */}

      <HeroBlock data={ban}/>
      <Container>
        <FlashSaleBlock />
        <BannerCarouselBlock data={ban} />
        <CategoryBlock sectionHeading="text-shop-by-category" />
        <Divider />
        <BestSellerProductFeed />
        {/* <BannerCard
          data={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="md:aspect-[6.7/1] aspect-[3.6/1]"
        /> */}
        <NewArrivalsProductFeed />
        {/* <Divider /> */}
        {/* <BrandBlock sectionHeading="text-top-brands" /> */}
        {/* <CollectionBlock data={collectionData} /> */}
        {/* <FeatureBlock /> */}
        {/* <DownloadApps className="bg-linen" /> */}
        <Support />
        <Subscription className="px-5 bg-linen sm:px-8 md:px-16 2xl:px-24" />
      </Container>
    </>
  );
}

Home.getLayout = getLayout;
