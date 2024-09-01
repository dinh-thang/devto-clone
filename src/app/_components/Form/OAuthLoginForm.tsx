import React from 'react';
import Image from "next/image";

const OAuthLoginForm = () => {
  const providers = [
    {
      name: "google",
      icon: "/gg.svg",
      action: ""
    },
    {
      name: "github",
      icon: "/git.svg",
      action: ""
    }
  ]

  return (
    <form className="flex h-screen w-full flex-col">
      {providers.map((item, index) => (
        <button
          key={index}
          className="flex min-h-6 w-full flex-row items-center rounded border p-3 text-center text-xs mb-4"
          type="submit"
          name="action"
          value={item.name}
        >
          <Image className="justify-start" src={item.icon} alt={item.name} width={24} height={24} />
          <p className="flex-grow">Continue with {item.name}</p>
        </button>
      ))}
    </form>
  );
};

export default OAuthLoginForm;