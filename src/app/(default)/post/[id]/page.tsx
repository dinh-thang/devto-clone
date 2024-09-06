"use client"

import React, {useEffect, useState} from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import {api} from "~/trpc/react";
import BaseCard from "~/app/_components/Card/BaseCard";
import Link from "next/link";
import MarkdownRenderer from "~/app/_components/MdTextArea/MarkdownRenderer";
import CommentsContainer from "~/app/_components/Container/CommentsContainer";

const Page = () => {
  const { id } = useParams();
  const createComment = api.comment.createComment.useMutation();
  const [comment, setComment] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      createComment.mutate({
        content: comment,
        postId: postId!,
      });
      setComment("");
    } catch (error) {
      console.error("Error when adding the comment:", error);
    }
  }

  return (
    <div className="grid h-screen grid-cols-12 gap-4 rounded-md pb-4">
      <div className="col-span-1">
        {/* TODO: Add reaction, jump to comment here*/}
      </div>

      <BaseCard
        className={`col-span-8 col-start-2 ${post.coverImage ? "p-0" : ""}`}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {post?.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="rounded-t-md"
                src={post.coverImage}
                alt={post?.name ?? "No title"}
              />
            ) : null}

            {/* profile, reaction, title, tags */}
            <div className="px-16 pt-8">
              {/* profile section*/}
              <div className="mb-2 flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="mr-2 h-[32px] w-[32px] items-start rounded-full"
                  src={post.createdBy.image ?? "/devto_ic.svg"}
                  alt=""
                />
                <div className="flex flex-col">
                  <div>
                    <button className="-my-2 -ml-1 inline-block h-6 w-auto rounded p-1 text-[14px] font-semibold hover:bg-[#F5F5F5]">
                      <Link href="/">{post.createdBy.name}</Link>
                    </button>
                  </div>
                  <div className="flex-grow"></div>
                  <p className="text-xs">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* reaction */}
              <div className={`flex flex-row py-2`}>
                <Image
                  src={"/heart.svg"}
                  alt={""}
                  className={`mr-2`}
                  width={24}
                  height={24}
                />
                <p>{post.reacts.length}</p>
              </div>

              {/* title */}
              <div className={``}>
                <MarkdownRenderer className={`text-[48px]`}>
                  {post.name}
                </MarkdownRenderer>
              </div>

              {/* tags */}
              <div className="mb-2 flex flex-row">
                {post.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="rounded border border-white px-[7px] py-1 text-[14px] hover:border-gray-400/80 hover:bg-[#F5F5F5]"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
            </div>

            {/* content */}
            <div className={`px-16 py-8`}>
              <MarkdownRenderer>{post.content}</MarkdownRenderer>
            </div>

            <div className={`w-full border-b`}></div>

            {/* comment */}
            <div className={`px-16 py-8`}>
              <div className="mb-6 flex flex-row">
                <h1 className="text-2xl font-bold">
                  Top comments ({post.comments.length})
                </h1>
                <div className="flex-grow"></div>
                <button className="rounded-md border-2 border-gray-400/70 px-3.5 py-1.5 text-base hover:bg-[#F5F5F5] hover:shadow">
                  Subscribe
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-row mb-8">
                {/* comment form */}
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mr-2 h-[32px] w-[32px] items-start rounded-full"
                    src={post.createdBy.image ?? "/devto_ic.svg"}
                    alt=""
                  />
                </div>

                <div className={`flex flex-col w-full`}>
                  <textarea
                    placeholder="Add to the discussion"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mb-3 placeholder-text-[#525252] h-28 w-full resize-none rounded-md border p-2 focus:border-[#3b49df]"
                  ></textarea>

                  <div className={`flex flex-row`}>
                    <button
                      type="submit"
                      disabled={!comment.trim()}
                      className={`mr-2 rounded-md px-4 py-2 text-white ${
                        comment.trim() ? 'bg-[#3b49df] hover:bg-[#2f3ba8]' : 'bg-[#3b49df]/50'
                      }`}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      disabled={!comment.trim()}
                      className={`mr-2 rounded-md px-4 py-2 ${
                        comment.trim() ? 'bg-[#D6D6D7] hover:bg-[#B0B0B1]' : 'bg-[#D6D6D7]/50'
                      }`}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </form>

              {/* other comment */}
              <CommentsContainer postId={postId!}/>
            </div>
          </div>
        )}
      </BaseCard>

      <BaseCard className="col-span-3 rounded-md border bg-white"></BaseCard>
    </div>
  );


};

export default Page;