// import TopSection from "@/components/shared/TopSection";
// import { Post } from "../models/postModel";
// import NewsList from "./_components/NewsList";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Zjednoczeni | Aktualności",
// };

// type Props = {
//   searchParams: Promise<{
//     category?: string;
//     page?: string;
//     search?: string;
//   }>;
// };

// const NewsPage = async ({ searchParams }: Props) => {
//   const params = await searchParams;

//   const category = params.category ? Number(params.category) : null;

//   const currentPage = Math.max(Number(params.page) || 1, 1);

//   const queryParams = new URLSearchParams({
//     per_page: "5",
//     page: currentPage.toString(),
//     _embed: "true",
//   });

//   if (category !== null) {
//     queryParams.set("categories", category.toString());
//   }

//   const response = await fetch(
//     `${process.env.API_BASE_URL}/posts?${queryParams.toString()}`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!response.ok) return <div>Nie udało się pobrać postów.</div>;

//   const posts: Post[] = await response.json();

//   const totalPages = Number(response.headers.get("X-WP-TotalPages") || 0);

//   return (
//     <>
//       <TopSection
//         title="Aktualności"
//         header="Komunikaty i sprawy związkowe"
//         paragraph="Bieżące informacje o interwencjach, sporach zbiorowych i decyzjach, które dotyczą pracowników Elbest."
//       />

//       <section>
//         <div className="container">
//           <NewsList
//             posts={posts}
//             currentCategory={category}
//             currentPage={currentPage}
//             totalPages={totalPages}
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default NewsPage;

import TopSection from "@/components/shared/TopSection";
import { Post } from "../models/postModel";
import NewsList from "./_components/NewsList";
import { Metadata } from "next";
import SuspenseErrorBoundary from "@/components/shared/errors/SuspenseErrorBoundary";

export const metadata: Metadata = {
  title: "Zjednoczeni | Aktualności",
};

type Props = {
  searchParams: Promise<{
    category?: string;
    page?: string;
    search?: string;
  }>;
};

const NewsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const category = params.category ? Number(params.category) : null;

  const search = params.search?.trim() || "";

  const currentPage = Math.max(Number(params.page) || 1, 1);

  const queryParams = new URLSearchParams({
    per_page: "5",
    page: currentPage.toString(),
    _embed: "true",
  });

  if (category !== null) {
    queryParams.set("categories", category.toString());
  }

  if (search) {
    queryParams.set("search", search);
  }

  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?${queryParams.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return <div>Nie udało się pobrać postów.</div>;
  }

  const posts: Post[] = await response.json();

  const totalPages = Number(response.headers.get("X-WP-TotalPages") || 0);

  return (
    <>
      <TopSection
        title="Aktualności"
        header="Komunikaty i sprawy związkowe"
        paragraph="Bieżące informacje o interwencjach, sporach zbiorowych i decyzjach, które dotyczą pracowników Elbest."
      />
      <SuspenseErrorBoundary
        size="lg"
        errorMessage="Błąd ładowania aktualności"
        loadingMessage="Ładowanie aktualności"
      >
        <section>
          <div className="container">
            <NewsList
              posts={posts}
              currentCategory={category}
              currentPage={currentPage}
              totalPages={totalPages}
              search={search}
            />
          </div>
        </section>
      </SuspenseErrorBoundary>
    </>
  );
};

export default NewsPage;
