"use client"

import React, {useState} from 'react';
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";
import Image from "next/image";
import {api} from "~/trpc/react";
import {useRouter} from "next/navigation";
import TextToolBar from "~/app/_components/Bar/TextToolBar";

const BlogEditForm = ({ className } : { className: string }) => {
  const [coverImage, setCoverImage] = useState("https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fibv5cp72xewcimtdrr8v.gif");
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
    <form onSubmit={handleSubmit} className={`h-full flex flex-col ${className}`}>
      <div className="rounded-md bg-white border flex-grow">
        <div className="overflow-auto">
          <div className="px-16 py-8 h-full">
            <input
              type="text"
              placeholder="Paste cover image link..."
              className="w-full border-0 text-base py-6 placeholder-black font-medium focus:outline-0 focus:ring-0"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />

            <textarea
              placeholder="New post title here..."
              className="w-full resize-none placeholder-black/70 border-0 text-5xl mb-2 font-black focus:outline-0 focus:ring-0"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add up to 4 tags (separate by comma)"
              className="border-0 text-base placeholder-black/70 w-full focus:outline-0 focus:ring-0"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <TextToolBar className="-ml-2 py-2 px-16 bg-[#F9F9F9]"/>

          <textarea
            placeholder="Write your post content here..."
            className="placeholder-black/80 font-devMono text-lg font-medium w-full resize-none border-0 px-16 py-8 focus:outline-0 focus:ring-0"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>

      <div className={`flex flex-row py-4`}>
        <button
          type="submit"
          className={`mr-2 rounded-md bg-[#3b49df] px-4 py-2 font-medium text-white hover:bg-[#2f3ba8]`}
        >
          <p>Publish</p>
        </button>

        <SecondaryBtn onclick={saveDraft} className="px-4 mr-2 font-normal">
          <p className="text-black">Save draft</p>
        </SecondaryBtn>
        <SecondaryBtn className="mr-2">
          <Image src="/setting.svg" alt="" width={24} height={24} />
        </SecondaryBtn>
        <SecondaryBtn className="mr-2 px-4">
          <p className="text-black text-sm">Revert new changes</p>
        </SecondaryBtn>
      </div>
    </form>
  );
};

export default BlogEditForm;