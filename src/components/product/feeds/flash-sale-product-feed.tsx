import BannerCard from '@components/common/banner-card';
import SellWithProgress from '@components/common/sale-with-progress';
import { useProducts } from '@framework/products';
import classNames from 'classnames';
import { ROUTES } from '@lib/routes';
import Alert from '@components/ui/alert';
import { useTranslation } from 'next-i18next';
import isEmpty from 'lodash/isEmpty';
import NotFoundItem from '@components/404/not-found-item';
import { siteSettings } from '@settings/site.settings';
import { useBanners } from '@framework/banners';
import Carousel from '@components/ui/carousel/carousel';
import { useWindowSize } from 'react-use';
import { SwiperSlide } from 'swiper/react';

interface Props {
  className?: string;
  limit?: number;
}

const flashSaleCarouselBreakpoint = {
  '1280': {
    slidesPerView: 1,
  },
  '1025': {
    slidesPerView: 2,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 1,
  },
};

const FlashSaleBlock: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-7',
  limit = 10,
}) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const flashSellSettings = siteSettings?.homePageBlocks?.flashSale;

  const {
    data: products,
    isLoading: loading,
    error,
  }: any = useProducts({
    limit,
    tags: flashSellSettings?.slug,
  });

  const {
    data: ban,
  } = useBanners({
    limit: 10,
    parent: null,
  });

  const breakpoints = {
    '1500': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  };


  if (!loading && isEmpty(products)) {
    return <NotFoundItem text={t('text-no-flash-products-found')} />;
  }

  return (
    <div className={classNames(`grid grid-cols-1 xl:grid-cols-2 gap-y-12 lg:gap-y-14 xl:gap-y-0 xl:gap-x-7`,className)}>
      <Carousel
        breakpoints={breakpoints}
        centeredSlides={width < 1500 ? false : true}
        autoplay={{ delay: 5000 }}
        className="mx-0"
        buttonClassName="hidden"
        pagination={{
          clickable: true,
        }}
      >
        {Array.isArray(ban) && ban.map((banner: any) => (
          <SwiperSlide
            className="carouselItem px-0 2xl:px-3.5"
            key={`banner--key-${banner?.id}`}
          >
            <BannerCard
              key={`banner--key${banner.id}`}
              data={banner}
              href={''}
              className="xl:h-full xl:col-span-2"
              classNameInner="xl:aspect-[1/1.15] md:aspect-[3/1.15] h-full"
              effectActive={true}
            />
          </SwiperSlide>
        ))}
      </Carousel>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <SellWithProgress
          carouselBreakpoint={flashSaleCarouselBreakpoint}
          products={products}
          loading={loading}
          className="col-span-full xl:col-span-1 lg:mb-1 xl:mb-0"
        />
      )}
    </div>
  );
};

export default FlashSaleBlock;
