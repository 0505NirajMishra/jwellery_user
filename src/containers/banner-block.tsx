import BannerCard from '@components/common/banner-card';
import { ROUTES } from '@lib/routes';
import { StaticBanner } from '@type/index';

interface BannerProps {
  data: any[];
  className?: string;
}

const BannerBlock: React.FC<BannerProps> = ({
  data,
  className = 'mb-12 md:mb-14 xl:mb-16',
}) => {
  return (
    <div
      className={`${className} px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto`}
    >
      {data?.map((banner: any) => (
        <BannerCard
          key={`banner--key${banner.id}`}
          data={''}
          href={''}
          effectActive={true}
          variant="default"
          className={
            banner.type === 'medium'
              ? 'col-span-full sm:col-span-5 '
              : 'col-span-1 sm:col-span-2'
          }
          classNameInner={
            banner.type === 'medium'
              ? 'aspect-[2.3/1] sm:aspect-[5.075/2] '
              : 'aspect-square h-full'
          }
        />
      ))}
    </div>
  );
};

export default BannerBlock;
