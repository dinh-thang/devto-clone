"use client"

import React from 'react';
import {signOut} from "next-auth/react";

const ProfileDropCard = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
      <button
        onClick={() => signOut({callbackUrl: "https://devto-clone-s9px.vercel.app/"})}
        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileDropCard;