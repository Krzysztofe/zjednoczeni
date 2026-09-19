// import BlogListItem from "@/components/shared/BlogListItem";
// import Button from "@/components/shared/buttons/Button";
// import TopSection from "@/components/shared/TopSection";
// import { Post } from "../models/postModel";

// const NewsPage = async () => {
//   const response = await fetch(
//     `${process.env.API_BASE_URL}/posts?per_page=20&_embed`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!response.ok) {
//     throw new Error("Nie udało się pobrać postów.");
//   }

//   const posts: Post[] = await response.json();
//   console.log(posts);

//   return (
//     <>
//       <TopSection
//         title="Aktualności"
//         header="Komunikaty i sprawy związkowe"
//         paragraph="Bieżące informacje o interwencjach, sporach zbiorowych i decyzjach, które dotyczą pracowników Elbest."
//       />
//       <section>
//         <div className="container">
//           <div className="flex gap-4 flex-wrap">
//             {" "}
//             <Button
//               className="!py-2 !px-4"
//               variant="primary-empty"
//               message="Wszystkie"
//             />
//             <Button
//               className="!py-2 !px-4"
//               variant="primary-empty"
//               message="Szkoły i przedszkola"
//             />
//             <Button
//               className="!py-2 !px-4"
//               variant="primary-empty"
//               message="Spółki urzędu miasta"
//             />
//             <Button
//               className="!py-2 !px-4"
//               variant="primary-empty"
//               message="Elbest Security"
//             />
//             <Button
//               className="!py-2 !px-4"
//               variant="primary-empty"
//               message="Elektrownia Bełchatów"
//             />
//           </div>
//           <ul className="flex flex-col gap-4">
//             {posts.map((post) => {
//               const image = post._embedded?.["wp:featuredmedia"]?.[0];

//               return <BlogListItem post={post} image={image} />;
//             })}
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NewsPage;

import TopSection from "@/components/shared/TopSection";
import { Post } from "../models/postModel";
import NewsList from "./_components/NewsList";

const NewsPage = async () => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?per_page=5&_embed`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać postów.");
  }

  const posts: Post[] = await response.json();

  return (
    <>
      <TopSection
        title="Aktualności"
        header="Komunikaty i sprawy związkowe"
        paragraph="Bieżące informacje o interwencjach, sporach zbiorowych i decyzjach, które dotyczą pracowników Elbest."
      />

      <section>
        <div className="container">
          <NewsList posts={posts} />
        </div>
      </section>
    </>
  );
};

export default NewsPage;
