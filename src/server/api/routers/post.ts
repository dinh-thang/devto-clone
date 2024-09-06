import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      include: {
        createdBy: true, // Include the user
        comments: true,  // Include comments
        reacts: true,    // Include users reacted
      },
    });
  }),

  getPostById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findUnique({
        where: { id: input.id },
        include: {
          createdBy: true,
          comments: true,
          reacts: true,
        },
      });
    }),

  addPost: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        content: z.string().optional(),
        tags: z.array(z.string()).optional(),
        coverImage: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          content: input.content ?? "",
          createdBy: { connect: { id: ctx.session.user.id } },
          tags: input.tags ?? [],
          coverImage: input.coverImage,
        },
      });
    }),

  likePost: protectedProcedure
    .input(
      z.object({
        postId: z.string()
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.update({
        where: {
          id: input.postId,
        },
        data: {
          likes: { increment: 1 }
        }

      })
    }),

  deletePost: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return  ctx.db.post.delete({
        where: { id: input.id },
      });
    }),

});
