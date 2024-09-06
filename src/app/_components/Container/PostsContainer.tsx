"use client"

import React from 'react';
import {api} from "~/trpc/react";
import PostCard from "~/app/_components/Card/PostCard";

const PostsContainer = () => {
  const { data: posts, isLoading } = api.post.getAllPosts.useQuery();

  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            username={post.createdBy.name ?? "Anonymous"}
            userProfileImage={post.createdBy.image ?? "/devto_ic.svg"}
            timePosted={post.createdAt.toString()}
            coverImage={post.coverImage ?? ""}
            title={post.name}
            tags={post.tags}
            numberOfReactions={post.reacts?.length ?? 0}
            comments={post.comments?.length ?? 0}
          />
        ))
      )}
    </div>
  );
};

export default PostsContainer;