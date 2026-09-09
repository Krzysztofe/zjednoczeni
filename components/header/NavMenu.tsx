import { navLinks } from "@/data/navLinks";
import MenuLink from "./MenuLink";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6 sm:gap-16">
        {navLinks.map(({ text, link }) => (
          <MenuLink key={link} {...{ text, link }} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
