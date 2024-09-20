import Link from "next/link";
import React from "react";

export default async function page() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

  const data = await response.json();

  return (
    <div>
      {data.map((item: { title: string; body: string; id: number }) => (
        <div key={item.id} className="border p-2 my-2">
          <Link href={`posts/${item.id}`}>
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}{" "}
      <div></div>
    </div>
  );
}
