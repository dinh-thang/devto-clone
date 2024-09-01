import React from 'react';
import Image from "next/image";
import {signIn} from "next-auth/react";
import Link from "next/link";

const OAuthLoginForm = () => {
  const providers = [
    {
      name: "google",
      icon: "/gg.svg",
      link: "/api/auth/signin/google",
    },
    {
      name: "github",
      icon: "/git.svg",
      link: "/api/auth/signin/github"
    }
  ]

  return (
    <form className="flex h-screen w-full flex-col">
      {providers.map((item, index) => (
        <Link
          key={index}
          className="flex min-h-6 w-full flex-row items-center rounded border p-3 text-center text-xs mb-4"
          href={item.link}
        >
          <Image className="justify-start" src={item.icon} alt={item.name} width={24} height={24} />
          <p className="flex-grow text-base">Continue with {item.name}</p>
        </Link>
      ))}
    </form>
  );
};

export default OAuthLoginForm;