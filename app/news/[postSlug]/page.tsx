import { Post } from "@/app/models/postModel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formy pracy - Lista kontaktów organizacji",
};

type Props = {
  params: Promise<{ postSlug: string }>;
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
    <div>
      {" "}
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />{" "}
    </div>
  );
};

export default PostPage;

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   const post = await getPost(slug);

//   return {
//     title: post.title.rendered,
//     description: "Aktualności Zjednoczeni",
//   };
// }
