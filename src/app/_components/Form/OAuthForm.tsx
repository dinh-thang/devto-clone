"use client"

import React from 'react';
import Image from "next/image";
import {signIn} from "next-auth/react";

const OAuthForm = ({ isSignUp=false }) => {
  const providers = [
    {
      name: "google",
      icon: "/gg.svg",
    },
    {
      name: "github",
      icon: "/git.svg",
    },
    {
      name: "apple",
      icon: "/apple.svg",
    },
    {
      name: "mastodon",
      icon: "/mastodon.svg",
    },
    {
      name: "x",
      icon: "/x.svg",
    },
    {
      name: "forem",
      icon: "/forem.svg",
    },
    {
      name: "facebook",
      icon: "/fb.svg",
    },
  ]

  return (
    <div className="flex h-screen w-full flex-col">
      {providers.map((item, index) => (
        <button
          key={index}
          className="flex min-h-6 w-full flex-row items-center rounded border p-3 text-center text-xs mb-4"
          onClick={() => signIn(item.name, { callbackUrl: '/' })}
        >
          <Image className="justify-start" src={item.icon} alt={item.name} width={24} height={24} />
          <p className="flex-grow font-medium text-base">
            {isSignUp ? `Sign up with ${item.name}` : `Continue with ${item.name}`}
          </p>
        </button>
      ))}
    </div>
  );
};

export default OAuthForm;