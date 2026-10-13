import { Metadata } from "next";
import SuspenseErrorBoundary from "@/components/shared/errors/SuspenseErrorBoundary";
import PostContent from "./_components/PostContent";
import { generateMetadata as createPostMetadata } from "@/utils/metadata";

type Props = {
  params: Promise<{ postSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return createPostMetadata({ params });
}

export async function generateStaticParams() {
  const slugs: string[] = [];

  try {
    let page = 1;
    let totalPages = 1;

    do {
      const response = await fetch(
        `${process.env.API_BASE_URL}/posts?per_page=100&page=${page}&_fields=slug`,
        { next: { revalidate: false, tags: ["posts-all"] } },
      );

      if (!response.ok) break;

      totalPages = Number(response.headers.get("X-WP-TotalPages") || 1);
      const posts: { slug: string }[] = await response.json();
      slugs.push(...posts.map((post) => post.slug));
      page++;
    } while (page <= totalPages);
  } catch (error) {
    console.error("Błąd pobierania slugów wpisów:", error);
  }

  return slugs.map((slug) => ({ postSlug: slug }));
}

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
