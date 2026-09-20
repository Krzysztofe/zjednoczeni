import { Post } from "@/app/models/postModel";
import { formatDate } from "@/app/utils/formatDate";
import ButtonLink from "@/components/shared/buttons/ButtonLink";
import Icon from "@/components/shared/Icon";
import { mapBlogCategories } from "@/data/mapBlogCategiries";
import { Metadata } from "next";

type Props = {
  params: Promise<{ postSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postSlug } = await params;

  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?slug=${postSlug}&_fields=title`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return {
      title: "Wpis nie istnieje",
    };
  }

  const posts: Post[] = await response.json();
  const post = posts[0];

  if (!post) {
    return {
      title: "Wpis nie istnieje",
    };
  }

  return {
    title: `Zjednoczeni | ${post.title.rendered}`,
  };
}

const PostPage = async (props: Props) => {
  const { postSlug } = await props.params;

  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?slug=${postSlug}&_fields=id,slug,date,title,content,author,tags,categories`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać postów.");
  }

  const posts: Post[] = await response.json();
  const post = posts[0];

  console.log(post);
  if (!post) return <div>Wpis nie istnieje</div>;

  return (
    <section className="mt-20">
      <div className="container">
        <ButtonLink
          link={"/news"}
          className="w-fit h-fit mb-10 text-accent flex items-center gap-3 border-b border-transparent hover:border-accent"
          variant="ghost"
        >
          {" "}
          {<Icon icon={"arrow"} size={15} className={`bg-accent rotate-90`} />}
          Wróć do listy aktualności{" "}
        </ButtonLink>{" "}
        <h2 className="font-bold text-2xl">{post.title.rendered}</h2>
        <p className="text-xs text-gray-light">
          {formatDate(post.date)} /{" "}
          {mapBlogCategories[post.categories[0]] ?? "Inne"}
        </p>{" "}
        <div
          className="mt-10 mb-30  [&_p]:mb-6
    [&_h2]:text-2xl
    [&_h2]:font-bold
    [&_h2]:mt-8
    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_ol]:list-decimal
    [&_ol]:pl-6
    md:w-2/3"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />{" "}
      </div>
    </section>
  );
};

export default PostPage;
