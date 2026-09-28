import ButtonLink from "@/components/shared/buttons/ButtonLink";
import Icon from "@/components/shared/Icon";
import TopSection from "@/components/shared/TopSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zjednoczeni | Dokumenty",
};

const DocumentsPage = () => {
  return (
    <>
      {" "}
      <TopSection
        title="Dokumenty"
        header="Deklaracje i historai związku"
        paragraph="Część dokumentów wymaga kontaktu z przedstawicielem związku w zakładzie. Poniżej lista dokumentów możliwych do pobrania."
      />
      <table className="m-auto md:w-1/2 mb-20">
        <thead className="border-b-2">
          <tr>
            <th className="text-left p-10 pt-0">Dokument</th>{" "}
            <th className="p-10 pt-0"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white">
            {" "}
            <td className="p-10">Deklaracja członkowska</td>
            <td>
              <ButtonLink
                link={"/files/zjednoczeni-deklaracja.odt"}
                className="w-fit h-fit mt-auto text-accent flex items-center gap-3 border-b border-transparent hover:border-accent"
                variant="ghost"
              >
                Pobierz{" "}
                {
                  <Icon
                    icon={"arrow"}
                    size={15}
                    className={`bg-accent -rotate-90`}
                  />
                }
              </ButtonLink>
            </td>
          </tr>
          <tr className="hover:bg-white">
            {" "}
            <td className="p-10">Historia MZZP "Zjednoczeni"</td>
            <td>
              <ButtonLink
                link={"/files/zjednoczeni-historia.odt"}
                className="w-fit h-fit mt-auto text-accent flex items-center gap-3 border-b border-transparent hover:border-accent"
                variant="ghost"
              >
                Pobierz{" "}
                {
                  <Icon
                    icon={"arrow"}
                    size={15}
                    className={`bg-accent -rotate-90`}
                  />
                }
              </ButtonLink>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DocumentsPage;
