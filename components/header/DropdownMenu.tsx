"use client";

import { useState } from "react";

import Icon from "@/components/shared/Icon";

import { headerHeight } from "@/data/numbers";
import Button from "../shared/buttons/Button";

type Props = {
  variant: "mobile" | "desktop";
};

const DropdownMenu = ({ variant }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const classVariant =
    variant === "desktop" ? "absolute left-1/2 -translate-x-1/2" : "";

  return (
    <li className="relative">
      {variant === "desktop" && isOpen && (
        <div
          className="fixed inset-0 z-10"
          style={{ top: headerHeight }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <Button
        className="after:bg-font-dark !text-font-dark relative flex w-full items-center gap-2 text-sm after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        onClickAction={() => setIsOpen((prev) => !prev)}
        icon={
          <Icon
            icon={"chevron"}
            size={15}
            className={`bg-font-dark transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        }
        message="Oferta"
        variant="ghost"
        aria-expanded={isOpen}
      />

      <div
        className={` ${classVariant} top-full z-20 mt-2 grid w-max overflow-hidden bg-white transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} `}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-10 px-10 py-5"></ul>
        </div>
      </div>
    </li>
  );
};

export default DropdownMenu;
