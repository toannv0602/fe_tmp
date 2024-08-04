import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";
import { useEffect, useState } from 'react';
import { getDataNav } from '@/hooks/apis/home';

const HeaderData  = () => {
  const initialNavItems = [
    {
      id: 1,
      name: "Home",
      href: "/",
      subNavItems: [
      ],
    },
    {
      id: 2,
      name: "Destinations",
      // href: "/destinations",
      href: "",
      subNavItems: [
      ],
    },
    {
      id: 3,
      name: "Tours",
      href: "/tours-list",
      subNavItems: [
      ],
    },
  ];
  
  const initialSocial  = [
    { icon: "fa-facebook-square", link: "" },
    { icon: "fa-twitter", link: "" },
    { icon: "fa-instagram", link: "" },
    { icon: "fa-pinterest-p", link: "" },
  ];
  
  const initialHeaderData   = {
    icons: [
      {
        id: 1,
        icon: "icon-phone-call",
        content: "+ 92 666 999 0000",
        subHref: "tel",
      },
      {
        id: 2,
        icon: "icon-at",
        content: "needhelp@company.com",
        subHref: "mailto",
      },
    ],
    navItems :initialNavItems,
    social:initialSocial,
    logo2,
    logo
  };

  const [headerData, setHeaderData] = useState(initialHeaderData);
  const [dataNav, setDataNav] = useState(null);
  
  const mapNavDestination = (data) => {
    return {
      id: data.id,
      name: data.name,
      href: `/destinations-details/${data.code}`,
      subItems: [
        ...data?.menuChilds.map(child => ({
          id: child.id,
          name: child.name,
          href: `/destinations-detail-country/${child.code}`
        }))
      ]
    };
  };

  useEffect(() => {
    let isMounted = true;
    // Thay thế URL dưới đây bằng URL API thực tế của bạn
    const fetchNavBar = async () => {
      try {
        const responseNav = await getDataNav();
        if (isMounted) {
          setDataNav(responseNav.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchNavBar();
    return () => {
      isMounted = false;
    };
  }, []);


  useEffect(() => {
    if (dataNav !== null) {
      const mappedData = mapNavDestination(dataNav[0]);
      const updatedNavItems = headerData.navItems.map(item => 
        item.id === 2 ? { ...item, subNavItems: [mappedData] } : item
      );

      setHeaderData(prevHeaderData => ({
        ...prevHeaderData,
        navItems: updatedNavItems,
      }));
    }
  }, [dataNav]);

  return {headerData};
}
// export default headerData;

export default HeaderData ;
