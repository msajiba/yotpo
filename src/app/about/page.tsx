import { getIsAdmin } from "@/components/api/fetch";

const page = async () => {
  const isAdmin = await getIsAdmin("about");

  return (
    <div>
      <h1> About page</h1>
      <p>
        {isAdmin
          ? "You are an admin. You can access the about."
          : "You are not an admin. You cannot access the about."}
      </p>
    </div>
  );
};

export default page;
