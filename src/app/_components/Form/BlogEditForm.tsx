import React from 'react';

const BlogEditForm = () => {
  const addCoverImg = () => {
    return;
  }

  return (
    <div className="overflow-auto">
      <div className="py-8 px-12">
        <button className="shadow mb-5 text-black/65 block rounded border border-gray-400/50 border-2 px-3.5 py-1.5 font-semibold">
          Add a cover image
        </button>

        <input type="text" placeholder="New post title here..." className="text-[36px] focus:outline-0 border-0 focus:ring-0 font-black placeholder-black/65"/>
        <input type="text" placeholder="Add up to 4 tags..." className="focus:outline-0 border-0 focus:ring-0"/>
      </div>

      <div>
        {/*  TODO: Add toolbar for text editor */}
      </div>

      <div>
        <input placeholder="Write your post content here..." className="py-8 px-12 w-full focus:outline-0 border-0 focus:ring-0 font-bold placeholder-black/65"/>
      </div>
    </div>
  );
};

export default BlogEditForm;