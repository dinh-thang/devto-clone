'use client'

import React, {useState} from 'react';
import DevToLogo from "~/app/_components/Icon/DevToLogo";
import BaseCard from "~/app/_components/Card/BaseCard";
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";
import {BTN_PRIMARY_BG} from "~/app/_constants/styles";
import BlogEditForm from "~/app/_components/Form/BlogEditForm";

const Page = () => {
  const isEdit = useState(true);

  return (
    <div className="grid grid-cols-12 h-screen lg:px-[4vw] xl:px-[8vw] 2xl:px-[12vw]">
      <div className="col-start-1 col-span-7 flex h-[50px]">
        <div className="col-start-1 px-4">
          <DevToLogo/>
        </div>

        <div className="col-start-2 flex items-center">
          <p className="">Create Post</p>
        </div>
      </div>

      <div className="col-start-8 flex flex-row-reverse mt-auto">
        <SecondaryBtn className="mr-2">Preview</SecondaryBtn>
        <SecondaryBtn className="font-bold mx-2 mb-1 mt-auto">Edit</SecondaryBtn>
      </div>

      <div className="col-start-2 h-[90vh] pb-2 col-span-11 flex">
        <BaseCard className="w-[63%]">
          <BlogEditForm/>
        </BaseCard>

        <div className="w-[37%] p-4">
          <p className="font-bold text-lg">Editor Basics</p>
          <ul className="list-disc pl-4">
            <li>Use Markdown to write and format posts.</li>
            <li>Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL:&nbsp;
              <pre className="bg-gray-500/25 p-px inline rounded-lg">
                <code>&#123;&#37;https://...&#37;&#125;.</code>
              </pre>
              <a href="" className={`text-[${BTN_PRIMARY_BG}]`}>&nbsp;See a list of supported embeds.</a>
            </li>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <li>In addition to images for the post's content, you can also drag and drop a cover image.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Page;