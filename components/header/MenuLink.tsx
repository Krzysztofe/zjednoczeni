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
        link={link}
        className={`relative font-semibold !text-sm text-white
          after:absolute after:-bottom-1 after:left-0 after:h-[1px]
          after:bg-white after:transition-all after:duration-300
          ${isActive ? "!text-accent" : "after:w-0 hover:after:w-full"}
        `}
      >
        {text}
      </ButtonLink>
    </li>
  );
};

export default MenuLink;
