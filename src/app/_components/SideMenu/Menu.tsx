import React from 'react';
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const navMenu1 = [
    {
      name: "Home",
      link: "/",
      imagePath: "/home.svg",
    },
    {
      name: "DEV++",
      link: "/++",
      imagePath: "/devpp.svg",
    },
    {
      name: "Reading List",
      link: "/readinglist",
      imagePath: "/menu_ic3.svg",
    },
    {
      name: "Podcasts",
      link: "/podcasts",
      imagePath: "/menu_ic4.svg",
    },
    {
      name: "Videos",
      link: "/videos",
      imagePath: "/menu_ic5.svg",
    },
    {
      name: "Tags",
      link: "/tags",
      imagePath: "/menu_ic6.svg",
    },
    {
      name: "DEV Help",
      link: "/devhelps",
      imagePath: "/menu_ic7.svg",
    },
    {
      name: "Forem Shop",
      link: "/shop",
      imagePath: "/menu_ic8.svg",
    },
  ];

  return (
    <div className="flex flex-col">
      {navMenu1.map((item, index) => (
        <SecondaryBtn key={index} className="flex flex-row items-center">
          {/*<Image src={item.imagePath} alt={item.name}/>*/}
          <Image src={item.imagePath} alt={`${item.name} icon`} width={24} height={24} />
          <Link className="pl-2" href={item.link} passHref>
            {item.name}
          </Link>
        </SecondaryBtn>
      ))}
    </div>
  );
};

export default Menu;