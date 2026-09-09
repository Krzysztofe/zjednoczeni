import ButtonLink from "./shared/buttons/ButtonLink";
import Icon from "./shared/Icon";

const Footer = () => {
  return (
    <footer className="bg-bg-dark">
      <div className="container text-white py-20 flex justify-between">
        <div className="w-1/2 md:w-1/3">
          <div className="font-bold">MZZP Zjednoczeni</div>
          <div className="mt-6">
            Międzyzakładowy Związek Zawodowy Pracowników działający w grupie
            Elbest — ochrona, hotelarstwo, przedszkola zakładowe
          </div>
        </div>
        <div>
          <div className="font-bold">Kontakt</div>
          <div className="mt-6 flex gap-2 items-center">
            {" "}
            <Icon icon={"phone"} size={20} className={`bg-white`} />
            733 654 323
          </div>

          <ButtonLink
            icon={<Icon icon={"facebook"} size={20} className={`bg-white`} />}
            link={"https://www.facebook.com/MzzpZjednoczeni"}
            message="MZZP – Zjednoczeni"
            className="flex gap-2 items-center"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
