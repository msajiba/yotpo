"use server";

import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title");

  if (!title || typeof title !== "string") {
    throw new Error("Invalid title");
  }

  try {
    await prisma.post.create({
      data: {
        title,
      },
    });

    revalidateTag("posts");

    return {
      status: true,
      message: "Post created successfully",
    };
  } catch (error) {
    console.error("Error creating post:", error);
    return {
      status: false,
      message: "Error creating post",
    };
  }
}
