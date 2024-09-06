"use client"

import React, {useState} from 'react';
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";
import Image from "next/image";
import BaseCard from "~/app/_components/Card/BaseCard";
import {api} from "~/trpc/react";
import {useRouter} from "next/navigation";

const BlogEditForm = () => {
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const publish = api.post.addPost.useMutation({
    onSuccess: () => {
      console.log('Post added successfully');

      // reset after submission
      setTitle('');
      setTags('');
      setContent('');
      setCoverImage('');

      router.push("/");
    },
    onError: (error) => {
      console.error('Error adding post:', error);
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      alert('Title is required.');
      return;
    }

    // separate tags by comma
    const tagsList = tags.split(',').map((tag) => tag.trim()).filter(Boolean);

    publish.mutate({
      name: title,
      content: content,
      coverImage: coverImage ?? "",
      tags: tagsList,
    })
  }


  const saveDraft = () => {
    return;
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      <BaseCard className="flex-grow">
        <div className="overflow-auto">
          <div className="px-12 py-8">
            <input
              type="text"
              placeholder="Paste cover image link..."
              className="w-full border-0 focus:outline-0 focus:ring-0"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />

            <input
              type="text"
              placeholder="New post title here..."
              className="placeholder-text-[#525252] border-0 text-[36px] font-black focus:outline-0 focus:ring-0"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add up to 4 tags..."
              className="border-0 focus:outline-0 focus:ring-0"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div>{/*  TODO: Add toolbar for text editor */}</div>

          <div>
            <textarea
              placeholder="Write your post content here..."
              className="placeholder-text-[#525252] w-full resize-none border-0 px-12 py-8 focus:outline-0 focus:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </BaseCard>

      <div className={`flex flex-row py-4`}>
        <button
          type="submit"
          className={`mr-2 rounded bg-[#3b49df] px-4 py-2 font-bold text-white hover:bg-[#2f3ba8]`}
        >
          Publish
        </button>

        <SecondaryBtn onclick={saveDraft} className="mr-2">
          Save draft
        </SecondaryBtn>
        <SecondaryBtn className="mr-2">
          <Image src="/setting.svg" alt="" width={24} height={24} />
        </SecondaryBtn>
        <SecondaryBtn className="mr-2">Revert new changes</SecondaryBtn>
      </div>
    </form>
  );
};

export default BlogEditForm;