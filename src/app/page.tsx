import { getIsAdmin } from "@/components/api/fetch";
import React from "react";

const homePage = async () => {
  const isAdmin = await getIsAdmin("home");
  return (
    <div>
      <h1> Home page</h1>
      <p>
        {isAdmin
          ? "You are an admin. You can access the home."
          : "You are not an admin. You cannot access the home."}
      </p>
    </div>
  );
};

export default homePage;
