import prisma from "@/lib/prisma";
import { cache } from "react";

export const getIsAdmin = cache(async (page: string) => {
  console.log("Checking if the user is an admin...", page);

  const user = await prisma.user.findFirst({
    where: {
      name: "sajib",
    },
  });

  const isAdmin = user?.isAdmin;
  return isAdmin;
});
