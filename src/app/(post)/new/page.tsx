'use client'

import React, {useState} from 'react';
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";
import {BTN_PRIMARY_BG} from "~/app/_constants/styles";
import BlogEditForm from "~/app/_components/Form/BlogEditForm";

const Page = () => {
  const isEdit = useState(true);

  return (
    <div className="grid grid-cols-18 px-4">
      <div className="relative h-full col-span-12 col-start-2">
        <div className="absolute -top-[42px] right-0 flex flex-row-reverse">
          <SecondaryBtn className="mr-2 text-black/100">
            <p className="text-black">Preview</p>
          </SecondaryBtn>
          <SecondaryBtn className="mx-2 font-medium text-black/100">
            <p className="text-black">Edit</p>
          </SecondaryBtn>
        </div>
        <BlogEditForm className="mx-1" />
      </div>

      <div className="col-start-14 col-span-5 p-4">
        <p className="text-lg font-bold">Editor Basics</p>
        <ul className="list-disc pl-5 text-black/70">
          <li>Use Markdown to write and format posts.</li>
          <li>
            Embed rich content such as Tweets, YouTube videos, etc. Use the
            complete URL:&nbsp;
            <pre className="inline rounded-lg bg-gray-500/25 p-px">
              <code>&#123;&#37;https://...&#37;&#125;.</code>
            </pre>
            <a href="" className={`text-[${BTN_PRIMARY_BG}]`}>
              &nbsp;See a list of supported embeds.
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            In addition to images for the post's content, you can also drag and drop a cover image.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;