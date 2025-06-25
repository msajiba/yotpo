import { getIsAdmin } from "@/components/api/fetch";
import React from "react";

const dashboardPage = async () => {
  const isAdmin = await getIsAdmin("dashboard");
  return (
    <div>
      <h1> dashboard page</h1>
      <p>
        {isAdmin
          ? "You are an admin. You can access the dashboard."
          : "You are not an admin. You cannot access the dashboard."}
      </p>
    </div>
  );
};

export default dashboardPage;
