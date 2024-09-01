"use client"

import React, {useState} from 'react';
import PrimaryBtn from "~/app/_components/Button/PrimaryBtn";
import {pageRoutes} from "~/app/_constants/pageRoutes";
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ProfileDropCard from "~/app/_components/Card/ProfileDropCard";

const AuthSection = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // if (status === "unauthenticated") {
  //   return (
  //     <div className="flex flex-row-reverse w-1/2 h-full content-center items-center">
  //       <PrimaryBtn onclick={() => router.push(pageRoutes.SIGNUP)}>Create account</PrimaryBtn>
  //       <SecondaryBtn onclick={() => router.push(pageRoutes.LOGIN)} className="mr-[5px]">Log in</SecondaryBtn>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-row-reverse items-center flex-grow">
      <div className="flex items-center rounded-full top-10 px-1 pt-1">
        <div className="relative">
          <button type="button" className="h-10 w-10 hover:bg-[#3b49df]/15 rounded-full p-[4px]" onClick={togglePopup}>
            <Image className="rounded-full" src={session?.user?.image ?? "devto_ic.svg"} alt="" width={40} height={40} />
            {/*<Link href={pageRoutes.PROFILES}/>*/}
          </button>
          {isOpen ? <ProfileDropCard/> : ""}
        </div>

      </div>

      <SecondaryBtn className="">
        <Image className="px-2" src="/bell.svg" alt="notification icon" width={40} height={40} />
        <Link href={pageRoutes.NOTIFICATIONS}/>
      </SecondaryBtn>

      <PrimaryBtn className="mr-2" onclick={() => router.push(pageRoutes.NEW_POST)}>Create Post</PrimaryBtn>
    </div>
  );
};

export default AuthSection;