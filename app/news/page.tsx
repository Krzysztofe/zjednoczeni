import TopSection from "@/components/shared/TopSection";
import { Post } from "../models/postModel";
import ButtonLink from "@/components/shared/buttons/ButtonLink";
import Image from "next/image";
import { formatDate } from "../utils/formatDate";
import Button from "@/components/shared/buttons/Button";

const NewsPage = async () => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/posts?per_page=20&_embed`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać postów.");
  }

  const posts: Post[] = await response.json();
  console.log(posts);

  return (
    <>
      <TopSection
        title="Aktualności"
        header="Komunikaty i sprawy związkowe"
        paragraph="Bieżące informacje o interwencjach, sporach zbiorowych i decyzjach, które dotyczą pracowników Elbest."
      />
      <section>
        <div className="container">
          <div className="flex gap-4 flex-wrap">
            {" "}
            <Button
              className="w-fit !py-2 !px-4"
              variant="primary"
              message="Wszystkie"
            />
            <Button
              className="w-fit !py-2 !px-4"
              variant="primary"
              message="Szkoły i przedszkola"
            />
            <Button
              className="w-fit !py-2 !px-4"
              variant="primary"
              message="Spółki urzędu miasta"
            />
            <Button
              className="w-fit !py-2 !px-4"
              variant="primary"
              message="Elbest Security"
            />
            <Button
              className="w-fit !py-2 !px-4"
              variant="primary"
              message="Elektrownia Bełchatów"
            />
          </div>
          <ul className="flex flex-col gap-4">
            {posts.map((post) => {
              const image = post._embedded?.["wp:featuredmedia"]?.[0];

              return (
                <li key={post.id} className="py-16 border-b !border-gray-light">
                  <ButtonLink
                    link={`/news/${post.slug}`}
                    className="text-left flex flex-col md:flex-row gap-6"
                  >
                    {image ? (
                      <div className="relative h-100 md:w-150 md:h-auto shrink-0">
                        <Image
                          src={image.source_url}
                          alt={image.alt_text || post.title.rendered}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-white h-50 md:w-150 md:h-auto shrink-0 flex items-center justify-center">
                        {" "}
                        <Image
                          src="/icons/logoBlack.png"
                          alt="Logo"
                          width={150}
                          height={100}
                          priority
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="pb-20">
                      <p className="text-sm text-gray-light">
                        {formatDate(post.date)}
                      </p>
                      <h2 className="font-bold text-xl ">
                        {post.title.rendered}
                      </h2>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </div>
                  </ButtonLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
