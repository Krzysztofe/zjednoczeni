import { Metadata } from "next";
import SuspenseErrorBoundary from "@/components/shared/errors/SuspenseErrorBoundary";
import PostContent from "./_components/PostContent";

type Props = {
  params: Promise<{ postSlug: string }>;
};

type WordPressPost = {
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
};

async function getPostBySlug(postSlug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/posts?slug=${encodeURIComponent(postSlug)}&_fields=slug,title,excerpt`,

      {
        next: { revalidate: 3600, tags: [`post-${postSlug}`] },
      },
    );

    if (!response.ok) return null;

    const posts: WordPressPost[] = await response.json();

    return posts[0] ?? null;
  } catch (error) {
    console.error("Błąd pobierania wpisu:", error);
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/ /g, " ")
    .replace(/–/g, "–")
    .replace(/’/g, "’")
    .replace(/„/g, "„")
    .replace(/”/g, "”")
    .replace(/&/g, "&")
    .replace(/"/g, '"')
    .replace(/'/g, "'")
    .trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);

  if (!post) {
    return {
      title: "Zjedniczeni | Nie znaleziono wpisu",
    };
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 160);

  return {
    title: ` Zjednoczeni | ${title}`,
    description,
  };
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
