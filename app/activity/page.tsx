import TopSection from "@/components/shared/TopSection";

const ActivityPage = () => {
  return (
    <>
      <TopSection
        title="Nasza działalność"
        header="Co robimy na co dzień i co robimy, gdy dialog się kończy"
        paragraph="Nasze działania dzielą się na cztery obszary. Zaczynamy zawsze od rozmowy z pracodawcą, podejmujemy inne działania wtedy, gdy to nie przynosi efektu"
      />

      <section className="pt-16">
        <div className="container">
          <div className="md:flex border-b pb-16">
            {" "}
            <div className="text-accent  mb-12 md:w-1/5 pr-3">
              01 · Negocjacje
            </div>
            <div className="w-4/5">
              {" "}
              <h2 className="text-xl font-bold mb-5">
                Zakładowy Układ Zbiorowy Pracy
              </h2>
              <p className="">
                Reprezentujemy pracowników przy ustalaniu i zmianach ZUZP. Gdy
                pracodawca wypowiada układ jednostronnie, formalnie
                kwestionujemy taką decyzję i domagamy się utrzymania
                dotychczasowych warunków do czasu wynegocjowania nowych.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container">
          <div className="md:flex border-b pb-16">
            {" "}
            <div className="text-accent  mb-12 md:w-1/5 pr-3">
              02 · Nadzór i zgłoszenia
            </div>
            <div className="w-4/5">
              {" "}
              <h2 className="text-xl font-bold mb-5">
                Zawiadomienia do instytucji państwowych
              </h2>
              <p className="">
                Gdy podejrzewamy naruszenie prawa pracy lub zasad nadzoru
                właścicielskiego, kierujemy zawiadomienia do Ministerstwa
                Aktywów Państwowych i Komisji Nadzoru Finansowego oraz żądamy
                działań kontrolnych.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container">
          <div className="md:flex border-b pb-16">
            {" "}
            <div className="text-accent  mb-12 md:w-1/5 pr-3">
              03 · Działania publiczne
            </div>
            <div className="w-4/5">
              {" "}
              <h2 className="text-xl font-bold mb-5">
                Pikiety, konferencje prasowe, akcje solidarnościowe
              </h2>
              <p className="">
                Gdy sprawa dotyczy szerszej grupy pracowników albo negocjacje
                utykają, informujemy opinię publiczną i włączamy się we wspólne
                akcje z innymi związkami zawodowymi.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container">
          <div className="md:flex pb-16">
            {" "}
            <div className="text-accent  mb-12 md:w-1/5 pr-3">
              04 · Sprawy indywidualne
            </div>
            <div className="w-4/5">
              {" "}
              <h2 className="text-xl font-bold mb-5">
                Wsparcie pojedynczego pracownika
              </h2>
              <p className="">
                Pomagamy członkom związku w sprawach dotyczących czasu pracy,
                warunków BHP, wynagrodzenia czy nieuzasadnionego traktowania —
                od rozmowy z przełożonym po pismo formalne.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <section>
        {" "}
        <div className="container py-40">
          <h2 className="border-l-3 border-accent pl-16 text-xl">
            Związek nie zastępuje pracownika - daje mu głos, którego samemu
            trudniej się domagać.
          </h2>
        </div>
      </section>
    </>
  );
};

export default ActivityPage;
