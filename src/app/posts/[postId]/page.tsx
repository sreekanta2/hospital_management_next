import React from "react";

import { notFound } from "next/navigation";
import LinkPreview from "@/components/Linkpreview";

interface Post {
  id: string;
  title: string;
  completed: boolean;
}

export async function generateStaticParams() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return posts.slice(0, 20).map((post: Post) => ({
    postId: post.id.toString(),
  }));
}

type PageProps = {
  params: {
    postId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const postId = params.postId;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  const data: Post = await response.json();

  return (
    <div>
      <h1>Post ID: {postId}</h1>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? "Yes" : "No"}</p>
      <div className="h-screen w-full flex justify-center items-center">
        {/* <LinkPreview url={"https://www.creowis.com/"} /> */}
      </div>
    </div>
  );
}
