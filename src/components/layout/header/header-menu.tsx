import Link from '@components/ui/link';
import { FaChevronDown } from 'react-icons/fa';
import MegaMenu from '@components/ui/mega-menu';
import classNames from 'classnames';
import ListMenu from '@components/ui/list-menu';
import { useTranslation } from 'next-i18next';
import React from 'react';

interface MenuProps {
  category: string[];
  className?: string;
  subcategory: string[];
}

const HeaderMenu: React.FC<MenuProps> = ({ category, className, subcategory }) => {
  const { t } = useTranslation('menu');

  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      {category?.map((categoryItem: any) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${categoryItem.subMenu ? 'relative' : ''
            }`}
          key={categoryItem.id}
        >
          <Link
            href={`/search?category=${categoryItem.slug}`}
            className="relative inline-flex items-center px-3 py-2 text-sm font-normal before:rtl:right-0 before:ltr:left-0 xl:text-base text-heading xl:px-4 group-hover:text-black"
          >
            <span style={{ textTransform: 'uppercase' }}>{t(categoryItem.slug)}</span>
            {(categoryItem?.columns || categoryItem.subMenu) && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>

          <div className="megaMenu shadow-header bg-gray-200 absolute ltr:-left-20 rtl:-right-20 ltr:xl:left-0 rtl:xl:right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <div className="grid grid-cols-5">
              {subcategory
              ?.filter((subcatItem: any) => subcatItem.category_id == categoryItem.id)
                .map((subcatItem: any) => (
                  <ul
                    className="even:bg-gray-150 pb-7 2xl:pb-8 pt-6 2xl:pt-7"
                    key={subcatItem.id}
                  >
                    <li className="mb-1.5">
                      <Link
                        href={''}
                        className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                      >
                        {t(subcatItem.subcategory_name)}
                      </Link>
                    </li>
                    {/* You can add the logic to display column items here */}
                  </ul>
                ))}
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenu;

{/* {category?.map((item: any) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${
            item.subMenu ? 'relative' : ''
          }`}
          key={item.id}
        >
          <Link
            href={`/search?category=${item.slug}`}
            className="relative inline-flex items-center px-3 py-2 text-sm font-normal before:rtl:right-0 before:ltr:left-0 xl:text-base text-heading xl:px-4 group-hover:text-black"
          >
            <span style={{ textTransform:'uppercase' }}>{t(item.slug)}</span>
            {(item?.columns || item.subMenu) && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>

          {item?.subcategory && Array.isArray(item.subcategory) && (
            <MegaMenu columns={item.subcategory} />
          )}

          {item?.subMenu && Array.isArray(item.subMenu) && (
            <div className="absolute bg-gray-200 opacity-0 subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100">
              <ul className="py-5 text-sm text-body">
                {item.subMenu.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                    />
                  );
                })}
              </ul>
            </div>
          )}

        </div>
      ))} */}

      {/* {category?.map((item: any) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${item.subMenu ? 'relative' : ''
            }`}
          key={item.id}
        >
          <Link
            href={`/search?category=${item.slug}`}
            className="relative inline-flex items-center px-3 py-2 text-sm font-normal before:rtl:right-0 before:ltr:left-0 xl:text-base text-heading xl:px-4 group-hover:text-black"
          >
            <span style={{ textTransform: 'uppercase' }}>{t(item.slug)}</span>
            {(item?.columns || item.subMenu) && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>

          <div className="megaMenu shadow-header bg-gray-200 absolute ltr:-left-20 rtl:-right-20 ltr:xl:left-0 rtl:xl:right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <div className="grid grid-cols-5">
              {subcategory?.map((column: any) => (
              
                <ul
                  className="even:bg-gray-150 pb-7 2xl:pb-8 pt-6 2xl:pt-7"
                  key={column.id}
                >
                  <React.Fragment key={column.id}>
                    <li className="mb-1.5">
                      <Link
                        href={''}
                        className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                      >
                        {t(column.subcategory_name)}
                      </Link>
                    </li>
                    {columnItem?.columnItemItems?.map((item: any) => (
									<li
										key={item.id}
										className={
											columnItem?.columnItemItems?.length === item.id
												? "border-b border-gray-300 pb-3.5 mb-3"
												: ""
										}
									>
										<Link
											href={item.path}
											className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
										>
											{t(item.label)}
										</Link>
									</li>
								         ))}
                  </React.Fragment>
                </ul>
              ))}
            </div>
          </div>
        </div>
))} */}