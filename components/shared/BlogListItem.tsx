import { formatDate } from "@/app/utils/formatDate";
import ButtonLink from "./buttons/ButtonLink";
import Image from "next/image";
import { Post } from "@/app/models/postModel";

type Props = {
  post: Post;
  image: any;
};

const BlogListItem = ({ post, image }: Props) => {
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
          <div className="bg-white h-100 md:w-150 md:h-auto shrink-0 flex items-center justify-center">
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

        <div className="pb-20 md:w-1/2">
          <p className="text-xs text-gray-light">{formatDate(post.date)}</p>
          <h2 className="font-bold text-xl ">{post.title.rendered}</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />
        </div>
      </ButtonLink>
    </li>
  );
};

export default BlogListItem;
