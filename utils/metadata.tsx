import { Metadata } from "next";

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

type Props = {
  params: Promise<{ postSlug: string }>;
};

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
    title: `Zjednoczeni | ${title}`,
    description,
  };
}
