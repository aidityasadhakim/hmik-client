import Link from "next/link";
import { MENU_LIST } from "../../constant/constant";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavItem = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {MENU_LIST.map((menu, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setNavbar(!navbar)}
                href={menu.path}
                className={
                  pathname === menu.path
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItem;
