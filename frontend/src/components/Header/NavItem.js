import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from 'react';
import { getDataNav } from '@/hooks/apis/home';

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();

  const { name, href, subNavItems } = navItem;
  const subHref = subNavItems.map((item) => item.href);
  const current = pathname === href || subHref.includes(pathname);

  const [dataNav, setDataNav] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Thay thế URL dưới đây bằng URL API thực tế của bạn
  //   const fetchNav = async () => {
  //     try {
  //       const responseRegionTours = await getDataNav();
  //       setDataNav(responseRegionTours.data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   if (code) {
  //     fetchDataTour();
  //   }
  // }, [code]);

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href}>
        <a href={href}>{name}</a>
      </Link>
      <ul>
        {/* <div className="dropdown dropdown-content">
          <div className="row row-nowrap"> */}
        {subNavItems.map((subItem) => (
          <li
            className={subItem.subItems?.length ? "dropdown" : ""}
            key={subItem.id}
          >
            <Link href={subItem.href}>
              <a href={subItem.href}>{subItem.name}</a>
            </Link>
            <ul>
              {subItem.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <a href={item.href}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>


          // <div className="column">
          //   <h3>{subItem.name}</h3>
          //   {subItem.subItems?.map((item) => (
          //     <li key={item.id}>
          //       <Link href={item.href}>
          //         <a href={href}>{item.name}</a>
          //       </Link>
          //     </li>
          //   ))}
          // </div>

        ))
        }
        {/* </div>
        </div> */}
      </ul >
    </li >
  );
};

export default NavItem;
