import ButtonLink from "../shared/buttons/ButtonLink";

type Props = {
  text: string;
  link: string;
};

const MenuLink = ({ text, link }: Props) => {
  return (
    <li className=" ">
      <ButtonLink
        message={text}
        link={link}
        className="after:bg-white text-white relative font-semibold !text-sm after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      />
    </li>
  );
};

export default MenuLink;
