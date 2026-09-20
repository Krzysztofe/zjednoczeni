import { Metadata } from "next";
import SuspenseErrorBoundary from "@/components/shared/errors/SuspenseErrorBoundary";
import PostContent from "./_components/PostContent";

type Props = {
  params: Promise<{ postSlug: string }>;
};

export const metadata: Metadata = {
  title: "Zjednoczeni | Aktualności",
};

const PostPage = async ({ params }: Props) => {
  const { postSlug } = await params;

  return (
    <section className="mt-20">
      <div className="container">
        <SuspenseErrorBoundary
          size="lg"
          errorMessage="Błąd ładowania wpisu"
          loadingMessage="Ładowanie wpisu"
        >
          <PostContent postSlug={postSlug} />
        </SuspenseErrorBoundary>
      </div>
    </section>
  );
};

export default PostPage;
