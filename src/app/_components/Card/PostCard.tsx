import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {BTN_PRIMARY_BG} from "~/app/_constants/styles";
import MarkdownRenderer from "~/app/_components/MdTextArea/MarkdownRenderer";

export interface Comment {
  username: string;
  userProfileImage: string
  content: string
  commentDate: string
}

export interface Post {
  id: string
  username: string
  userProfileImage: string
  timePosted: string
  coverImage: string
  title: string
  numberOfReactions: number
  tags: string[]
  content: string
  className?: string
}

const PostCard: React.FC<Post> = ({
  id,
  username,
  userProfileImage,
  timePosted,
  title,
  coverImage,
  tags,
  numberOfReactions,
  content,
  className="",
}) => {
  const commentList: Comment[] = [
    {
      username: "name",
      userProfileImage: "image",
      content: "comment content",
      commentDate: "cmt date"
    }
  ]

  const getNumberOfComments = () => {
    return commentList.length;
  }

  return (
    <div className={`${className} w-full rounded border bg-white mb-2`}>
      {/* bg image */}
      {coverImage && (
        <div className="h-auto w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="rounded-t" src={coverImage} alt={username} />
          <Link href={`link to post`} />
        </div>
      )}

      <div className="rounded-b p-5">
        {/* post info */}
        <div className="flex mb-2">
          <img
            className="mr-2 h-[32px] w-[32px] items-start rounded-full"
            src={userProfileImage}
            alt=""
          />
          <div className="flex flex-col">
            <div>
              <button className="-my-2 -ml-1 h-6 inline-block w-auto rounded p-1 text-[14px] font-semibold hover:bg-[#F5F5F5]">
                <Link href="/">{username}</Link>
              </button>
            </div>
            <div className="flex-grow"></div>
            <p className="text-xs">{new Date(timePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
          </div>
        </div>

        {/* title, tags and reactions */}
        <div className="pl-10">
          <Link href={`post/${id}`} className={`mb-2 hover:text-[${BTN_PRIMARY_BG}]`}>
            <MarkdownRenderer>{title}</MarkdownRenderer>
          </Link>

          {/* tags */}
          <div className="flex flex-row mb-2">
            {tags.map((tag, index) => (
              <p key={index} className="text-[14px] py-1 px-[7px] border border-white hover:bg-[#F5F5F5] hover:border-gray-400/80 rounded">#{tag}</p>
            ))}
          </div>

          {/* reaction */}
          <div className="flex flex-row">
            <div className="flex flex-row py-1 pr-3 pl-2 rounded hover:bg-[#F5F5F5]">
              <div className="flex items-center justify-center border-white border h-[28px] w-[28px] rounded-full bg-[#F5F5F5]">
                <Image src={"/heart.svg"} alt={"heart"} height={18} width={18} />
              </div>

              <p className="ml-2">{numberOfReactions} Reaction{numberOfReactions === 1 ? '' : 's'}</p>
            </div>

            {/* comments */}
            <div className="flex flex-row items-center rounded py-1 pr-3 pl-2 hover:bg-[#F5F5F5]">
              {/* TODO: display save button, reading time */}
              <p>{getNumberOfComments()} Comment{getNumberOfComments() === 1 ? '' : 's'}</p>
              <Image className="" src="/comment.svg" alt="cmt icon" width={24} height={24}/>
            </div>
          </div>
        </div>
      </div>

      {/* comments */}
      <div></div>
    </div>
  );
};

export default PostCard;