import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formy pracy - Lista kontaktów organizacji",
};

type Props = {
  params: Promise<{ postSlug: string }>;
};

const PostPage = async (props: Props) => {
  const { postSlug } = await props.params;

  return <div>eeeeeeeee{postSlug} </div>;
};

export default PostPage;
