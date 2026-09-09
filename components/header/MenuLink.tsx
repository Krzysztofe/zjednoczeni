// import ButtonLink from "../shared/buttons/ButtonLink";

// type Props = {
//   text: string;
//   link: string;
// };

// const MenuLink = ({ text, link }: Props) => {
//   return (
//     <li className=" ">
//       <ButtonLink
//         message={text}
//         link={link}
//         className="after:bg-white text-white relative font-semibold !text-sm after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
//       />
//     </li>
//   );
// };

// export default MenuLink;

"use client";

import { usePathname } from "next/navigation";
import ButtonLink from "../shared/buttons/ButtonLink";

type Props = {
  text: string;
  link: string;
};

const MenuLink = ({ text, link }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <li>
      <ButtonLink
        message={text}
        link={link}
        className={`relative font-semibold !text-sm text-white
          after:absolute after:-bottom-1 after:left-0 after:h-[1px]
          after:bg-white after:transition-all after:duration-300
          ${isActive ? "!text-accent" : "after:w-0 hover:after:w-full"}
        `}
      />
    </li>
  );
};

export default MenuLink;
