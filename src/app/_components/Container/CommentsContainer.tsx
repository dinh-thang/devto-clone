import {api} from "~/trpc/react";
import React from "react";
import CommentContainer from "~/app/_components/Container/CommentContainer";

const CommentsContainer = ({ postId } : { postId: string }) => {
  const {data: comments } = api.comment.getCommentsByPostId.useQuery({postId});

  return (
    <div>
      {comments?.map((comment) => (
        <CommentContainer
          className={"mb-2"}
          key={comment.id}
          commentId={comment.id}
          userImage={comment.user.image ?? "/devto_ic.svg"}
          userName={comment.user.name ?? "Anonymous"}
          content={comment.content}
          createdAt={comment.createdAt}
          depth={0}
          likes={comment.likes}
          postId={postId}
          parentId={comment.id}
        />
      ))}
    </div>
  );
}
export default CommentsContainer;