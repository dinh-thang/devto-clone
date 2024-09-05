"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import {api} from "~/trpc/react";
import BaseCard from "~/app/_components/Card/BaseCard";
import Link from "next/link";
import MarkdownRenderer from "~/app/_components/MdTextArea/MarkdownRenderer";

const Page = () => {
  const { id } = useParams();
  const postId = Array.isArray(id) ? id[0] : id;

  const { data: post, isLoading, error } = api.post.getPostById.useQuery(
    { id: postId ?? "" },
    { enabled: !!postId }
  );

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!post) {
    return;
  }

  return (
    <div className="grid h-screen grid-cols-12 gap-4 rounded-md">
      <div className="col-span-1">
        {/* TODO: Add reaction, jump to comment here*/}
      </div>

      <BaseCard className={`col-span-8 col-start-2 ${post.coverImage ? 'p-0' : ''}`}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {post?.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="rounded-t-md" src={post.coverImage} alt={post?.name ?? "No title"}/>
            ) : null}

            {/* profile, reaction, title, tags */}
            <div className="px-16 pt-8">
              {/* profile section*/}
              <div className="flex mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="mr-2 h-[32px] w-[32px] items-start rounded-full"
                  src={post.createdBy.image ?? "/devto_ic.svg"}
                  alt=""
                />
                <div className="flex flex-col">
                  <div>
                    <button
                      className="-my-2 -ml-1 h-6 inline-block w-auto rounded p-1 text-[14px] font-semibold hover:bg-[#F5F5F5]">
                      <Link href="/">{post.createdBy.name}</Link>
                    </button>
                  </div>
                  <div className="flex-grow"></div>
                  <p className="text-xs">{new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</p>
                </div>
              </div>

              {/* reaction */}
              <div className={`py-2 flex flex-row`}>
                <Image src={"/heart.svg"} alt={""} className={`mr-2`} width={24} height={24}/>
                <p>{post.comments.length}</p>
              </div>

              {/* title */}
              <div className={``}>
                <MarkdownRenderer className={`text-[48px]`}>{post.name}</MarkdownRenderer>
              </div>

              {/* tags */}
              <div className="flex flex-row mb-2">
                {post.tags.map((tag, index) => (
                  <p key={index} className="text-[14px] py-1 px-[7px] border border-white hover:bg-[#F5F5F5] hover:border-gray-400/80 rounded">#{tag}</p>
                ))}
              </div>
            </div>

            {/* content */}
            <div className={`px-16 py-8`}>
              <MarkdownRenderer>{post.content}</MarkdownRenderer>
            </div>
          </div>
        )}

      </BaseCard>

      <BaseCard className="col-span-3 rounded-md border bg-white"></BaseCard>
    </div>
  );


};

export default Page;