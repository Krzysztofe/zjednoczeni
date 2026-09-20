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
        header="Statut, deklaracje i wzory pism"
        paragraph="Część dokumentów wymaga kontaktu z przedstawicielem związku w zakładzie. Poniżej lista dokumentów możliwych do pobrania."
      />
    </>
  );
};

export default DocumentsPage;
