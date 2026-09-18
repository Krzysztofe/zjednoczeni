import { Post } from "@/app/models/postModel";
import ButtonLink from "@/components/shared/buttons/ButtonLink";
import Icon from "@/components/shared/Icon";
import TopSection from "@/components/shared/TopSection";
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
    title: `MZZP Zjednoczeni | ${post.title.rendered}`,
  };
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const PostPage = async (props: Props) => {
  const { postSlug } = await props.params;

  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?slug=${postSlug}&_fields=id,slug,date,title,content,author,tags`,
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
    <>
      {/* <TopSection
        title="Aktualności"
        header="Komunikaty i sprawy związkowe"
        paragraph="Bieżące informacje o interwencjach, sporach zbiorowych i decyzjach, które dotyczą pracowników Elbest."
      /> */}
      <div className="container">
        <ButtonLink
          link={"/news"}
          className="w-fit h-fit mb-16 text-accent flex items-center gap-3 border-b border-transparent hover:border-accent"
          variant="ghost"
        >
          {" "}
          {<Icon icon={"arrow"} size={15} className={`bg-accent rotate-90`} />}
          Wróć do listy aktualności{" "}
        </ButtonLink>{" "}
        <h2 className="font-bold text-2xl">{post.title.rendered}</h2>
        <p className="text-sm text-gray-light">{formatDate(post.date)}</p>
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
    </>
  );
};

export default PostPage;
