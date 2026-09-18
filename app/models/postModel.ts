// export type Post = {
//   id: number;
//   slug: string;
//   date: string;

//   title: {
//     rendered: string;
//   };

//   excerpt: {
//     rendered: string;
//   };

//   content: {
//     rendered: string;
//   };

//   author: number;
//   tags: number[];
// };
export type Post = {
  id: number;
  slug: string;
  date: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  author: number;
  tags: number[];
  featured_media: number;

  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: {
            source_url: string;
          };
        };
      };
    }[];
  };
};
