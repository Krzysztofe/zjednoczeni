import Image from "next/image";
import ButtonLink from "./shared/buttons/ButtonLink";
import Link from "next/link";

const links = ["Kontakt", "Instagram", "Facebook", "LinkedIn"];

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="_container-sm text-font-light py-26">
        <div className="flex flex-col items-center justify-between gap-20 border-b pb-20 sm:flex-row">
          <Link href="/"></Link>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <p className="text-center">
              Daj znać, co możemy dla Ciebie zrobić!
            </p>
            <ButtonLink
              variant="primary"
              link={"/kontakt"}
              message="Skontaktuj się z nami"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-20 py-20 text-sm lg:flex-row">
          <ul className="flex flex-col gap-6 sm:flex-row sm:gap-20">
            {links.map((link) => {
              return (
                <li className="flex justify-center" key={link}>
                  <ButtonLink
                    message={link}
                    link={`/${link}`}
                    className="relative !text-sm after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col text-center sm:flex-row sm:gap-20">
            <p>000-000-000</p>
            <p>giarddesign@kontakt.pl</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:pt-20">
          <p>Prawa zastrzeżone &copy; 2022</p>
          <div className="flex items-center gap-8">
            <p>made by</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
