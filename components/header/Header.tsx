import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-bg-dark">
      <div className="container flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={150}
            height={100}
            priority
            unoptimized
          />
        </Link>

        <div className="ml-auto hidden lg:block">
          <NavMenu />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
