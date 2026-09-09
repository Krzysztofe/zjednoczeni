import Button from "@/components/shared/buttons/Button";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formy pracy - Lista kontaktów organizacji",
};

type Post = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
};

export default async function HomePage() {
  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?_fields=id,slug,date,title,content,author,tags`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać postów.");
  }

  const posts: Post[] = await response.json();
  console.log(posts);

  return (
    <main className="">
      sssssssssssss
      <Button message="Click me" />
      <ul className="flex flex-col gap-4 mt-10">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
