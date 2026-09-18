import { Metadata } from "next";
import ButtonLink from "@/components/shared/buttons/ButtonLink";
import Icon from "@/components/shared/Icon";
import SideBorder from "@/components/shared/SideBorder";
import { Post } from "./models/postModel";
import Image from "next/image";
import { formatDate } from "./utils/formatDate";

export const metadata: Metadata = {
  title: "MZZP Zjednoczeni | strona główna",
};

export default async function HomePage() {
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
  console.log(posts);

  return (
    <>
      <section>
        <div className="container flex flex-col gap-10 py-10">
          <div className="text-2xl font-bold">
            Razem mamy głos. Osobno mamy tylko opinię.
          </div>
          <div>
            MZZP „Zjednoczeni” reprezentuje pracowników ochrony, hoteli i
            przedszkoli zakładowych w grupie Elbest. Pilnujemy, żeby zmiany
            właścicielskie i restrukturyzacje nie odbywały się kosztem ludzi.
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <ButtonLink
              link={"for-members"}
              className="w-fit "
              variant="primary"
            >
              Dołącz do związku
            </ButtonLink>
            <ButtonLink
              link={"/contact"}
              className="w-fit "
              variant="primary-empty"
            >
              Zgłoś problem w pracy
            </ButtonLink>
          </div>
          <SideBorder />
        </div>
      </section>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-10">
        <div className="p-10 border border-bg-dark border-l-0 border-r-0 sm:border-r">
          <div className="text-accent text-xl">2009</div>
          <div>rok powstania związku</div>
        </div>
        <div className="p-10 border border-bg-dark border-l-0 border-r-0 md:border-r">
          <div className="text-accent text-xl">700+</div>
          <div>reprezentowanych pracowników</div>
        </div>
        <div className="p-10 border border-bg-dark border-l-0 border-r-0 sm:border-r">
          <div className="text-accent text-xl">3</div>
          <div>branże: ochrona, hotelarstwo, edukacja</div>
        </div>
        <div className="p-10 border border-bg-dark border-l-0 border-r-0">
          <div className="text-accent text-xl">24/7</div>
          <div>kontakt w sprawach pilnych</div>
        </div>
      </section>
      <section className="container  pt-16 pb-30">
        <div className="flex justify-between border-b-3 pb-10">
          <h2 className="text-xl font-bold">Ostatnie aktualności</h2>
          <ButtonLink
            link={"/news"}
            className="w-fit h-fit mt-auto text-accent flex items-center gap-3 border-b border-transparent hover:border-accent"
            variant="ghost"
          >
            Wszystkie wpisy{" "}
            {
              <Icon
                icon={"arrow"}
                size={15}
                className={`bg-accent -rotate-90`}
              />
            }
          </ButtonLink>
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
      </section>
      <section className="container">
        <h2 className="text-xl font-bold border-b-3 mb-10 pb-10">
          Czym się zajmujemy
        </h2>
        <div className="grid md:grid-cols-3 pb-30">
          <div className="p-6 border border-bg-dark">
            <Icon icon={"shield"} size={30} className={`!bg-accent mb-8`} />
            <div className="font-bold mb-4 text-lg">Ochrona zatrudnienia</div>
            <p>
              Negocjujemy Zakładowe Układy Zbiorowe Pracy i sprzeciwiamy się ich
              jednostronnemu wypowiadaniu.
            </p>
          </div>
          <div className="p-6 border border-bg-dark">
            <Icon icon={"house"} size={30} className={`!bg-accent mb-8`} />
            <div className="font-bold mb-4 text-lg">Sprawy socjalne</div>
            <p>
              Bronimy programów PPE, ubezpieczeń grupowych i innych świadczeń,
              gdy pracodawca chce je ograniczyć.
            </p>
          </div>
          <div className="p-6 border border-bg-dark">
            <Icon icon={"trend"} size={30} className={`!bg-accent mb-8`} />
            <div className="font-bold mb-4 text-lg">Warunki pracy</div>
            <p>
              Reagujemy, gdy czas pracy, upały czy obciążenie obowiązkami
              przekraczają to, co dopuszcza prawo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
