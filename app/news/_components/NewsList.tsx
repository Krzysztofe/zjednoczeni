"use client";

import { useState } from "react";

import BlogListItem from "@/components/shared/BlogListItem";
import Button from "@/components/shared/buttons/Button";
import { Post } from "@/app/models/postModel";

type Props = {
  posts: Post[];
};

const NewsList = ({ posts }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredPosts =
    selectedCategory === null
      ? posts
      : posts.filter((post) => post.categories.includes(selectedCategory));

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Button
          className="!py-2 !px-4"
          variant="primary-empty"
          message="Wszystkie"
          onClickAction={() => setSelectedCategory(null)}
        />

        <Button
          className="!py-2 !px-4"
          variant="primary-empty"
          message="Szkoły i przedszkola"
          onClickAction={() => setSelectedCategory(1)}
        />

        <Button
          className="!py-2 !px-4"
          variant="primary-empty"
          message="Spółki urzędu miasta"
          onClickAction={() => setSelectedCategory(3)}
        />

        <Button
          className="!py-2 !px-4"
          variant="primary-empty"
          message="Elbest Security"
          onClickAction={() => setSelectedCategory(4)}
        />

        <Button
          className="!py-2 !px-4"
          variant="primary-empty"
          message="Elektrownia Bełchatów"
          onClickAction={() => setSelectedCategory(5)}
        />
      </div>

      <ul className="flex flex-col gap-4">
        {filteredPosts.map((post) => {
          const image = post._embedded?.["wp:featuredmedia"]?.[0];

          return <BlogListItem key={post.id} post={post} image={image} />;
        })}
      </ul>
    </>
  );
};

export default NewsList;
