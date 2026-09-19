import Link from "next/link";
import BlogListItem from "@/components/shared/BlogListItem";
import { Post } from "@/app/models/postModel";

type Props = {
  posts: Post[];
  currentCategory: number | null;
  currentPage: number;
  totalPages: number;
};

const categories = [
  {
    id: null,
    name: "Wszystkie",
  },
  {
    id: 1,
    name: "Szkoły i przedszkola",
  },
  {
    id: 3,
    name: "Spółki urzędu miasta",
  },
  {
    id: 4,
    name: "Elbest Security",
  },
  {
    id: 5,
    name: "Elektrownia Bełchatów",
  },
];

const NewsList = ({
  posts,
  currentCategory,
  currentPage,
  totalPages,
}: Props) => {
  const createUrl = (category: number | null, page: number = 1) => {
    const params = new URLSearchParams();

    if (category !== null) {
      params.set("category", category.toString());
    }

    if (page > 1) {
      params.set("page", page.toString());
    }

    const query = params.toString();

    return query ? `/news?${query}` : "/news";
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {categories.map((category) => {
          const isActive = currentCategory === category.id;

          return (
            <Link
              key={category.name}
              href={createUrl(category.id)}
              className={`
                inline-flex items-center justify-center
                !py-2 !px-4
                border border-accent
                transition-colors
                ${
                  isActive
                    ? "bg-accent text-white"
                    : "text-accent hover:bg-accent hover:text-white"
                }
              `}
            >
              {category.name}
            </Link>
          );
        })}
      </div>

      <ul className="flex flex-col gap-4">
        {posts.map((post) => {
          const image = post._embedded?.["wp:featuredmedia"]?.[0];

          return <BlogListItem key={post.id} post={post} image={image} />;
        })}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 my-10">
          <Link
            href={createUrl(currentCategory, currentPage - 1)}
            className="
                inline-flex items-center justify-center
                px-4 py-2
                border border-accent
                text-accent
                hover:bg-accent
                hover:text-white
                transition-colors
              "
          >
            Poprzednia
          </Link>

          <span className="px-4 py-2">
            {currentPage} / {totalPages}
          </span>

          {
            <Link
              href={createUrl(currentCategory, currentPage + 1)}
              className="
                inline-flex items-center justify-center
                px-4 py-2
                border border-accent
                text-accent
                hover:bg-accent
                hover:text-white
                transition-colors
              "
            >
              Następna
            </Link>
          }
        </div>
      )}
    </>
  );
};

export default NewsList;
