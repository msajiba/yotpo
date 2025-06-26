import React from "react";

const homePage = async () => {
  const response = await fetch("https://yotpo.vercel.app/api/posts", {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  const data = await response.json();

  return (
    <div>
      <h1> Home page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post: { id: number; title: string }) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default homePage;
