import SideBorder from "@/components/shared/SideBorder";
import TopSection from "@/components/shared/TopSection";

const AboutPage = () => {
  return (
    <>
      <TopSection
        title="O związku"
        header="Powstaliśmy tam, gdzie nikt inny nie chciał działać"
        paragraph="MZZP Zjednoczeni to międzyzakładowy związek zawodowy skupiający
            pracowników spółki Elbest - ochroniarzy, personel hotelowy oraz
            pracowników przedszkoli zakładowych. Działamy niezależnie od
            pracodawcy i ponad podziałami stanowiskowymi."
      />
      <section>
        <div className="container md:flex pb-30">
          <div className="md:w-3/4 md:pr-10 mb-20">
            <div className="mb-10">
              <h2 className="font-bold text-lg">Nasza misja</h2>
              <p className="">
                Reprezentujemy interesy pracownicze wobec pracodawcy i jego
                kolejnych właścicieli - również wtedy, gdy spółka zmienia
                strukturę, sprzedaje oddziały albo wypowiada układy zbiorowe.
                Naszym celem jest, żeby żadna zmiana organizacyjna nie odbywała
                się kosztem wynagrodzeń, świadczeń socjalnych czy bezpieczeństwa
                zatrudnienia.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="font-bold text-lg">Jak działamy</h2>
              <p className="">
                Prowadzimy bieżący dialog z pracodawcą, a gdy to nie wystarcza —
                składamy formalne zawiadomienia do instytucji nadzorczych,
                organizujemy pikiety i współpracujemy z innymi związkami
                zawodowymi w grupie. Informujemy członków na bieżąco, bez
                ozdabiania trudnych wiadomości.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="font-bold text-lg">Z kim współpracujemy</h2>
              <p className="">
                Utrzymujemy kontakt z pozostałymi organizacjami związkowymi
                działającymi w Elbest oraz z ogólnopolskimi strukturami
                związkowymi, gdy sprawa wykracza poza jeden zakład.
              </p>
            </div>
            <h2 className="font-bold text-lg mb-6">Oś czasu</h2>

            <div
              className="border-l-2 pl-10 py-10 relative after:absolute
    after:-left-[11px]
    after:top-10
    after:h-8
    after:w-8
    after:rounded-full
    after:bg-accent"
            >
              <div className="text-accent">2009</div>
              <h3 className="font-bold my-4">Powstanie związku</h3>
              <p>
                Grupa pracowników ochrony zakłada Międzyzakładowy Związek
                Zawodowy Pracowników „Zjednoczeni”, by mieć realny wpływ na
                warunki zatrudnienia.
              </p>
            </div>
            <div
              className="border-l-2 pl-10 py-10 relative after:absolute
    after:-left-[11px]
    after:top-10
    after:h-8
    after:w-8
    after:rounded-full
    after:bg-accent"
            >
              <div className="text-accent">2017</div>
              <h3 className="font-bold my-4">
                Wspólne działania protestacyjne
              </h3>
              <p>
                Udział w konferencjach prasowych i akcjach solidarnościowych z
                pracownikami sektora energetycznego w regionie łódzkim.
              </p>
            </div>
            <div
              className="border-l-2 pl-10 py-10 relative after:absolute
    after:-left-[11px]
    after:top-10
    after:h-8
    after:w-8
    after:rounded-full
    after:bg-accent"
            >
              <div className="text-accent">2022</div>
              <h3 className="font-bold my-4">Zmiana właściciela spółki</h3>
              <p>
                Elbest przechodzi pod Polski Holding Hotelowy. Związek zaczyna
                monitorować, czy nowe zasady zatrudnienia są zgodne z prawem.
              </p>
            </div>
            <div
              className="border-l-2 pl-10 py-10 relative after:absolute
    after:-left-[11px]
    after:top-10
    after:h-8
    after:w-8
    after:rounded-full
    after:bg-accent"
            >
              <div className="text-accent">2024–2026</div>
              <h3 className="font-bold my-4">Spór o układ zbiorowy</h3>
              <p>
                Sprzeciw wobec wypowiedzenia Zakładowego Układu Zbiorowego Pracy
                i zawiadomienie Ministerstwa Aktywów Państwowych oraz KNF.
              </p>
            </div>
          </div>
          <div className=" mb-30">
            <div className="p-6 bg-white">
              <h3 className="font-bold mb-4 text-lg">Zasięg działania</h3>
              <p className="border-b-1 mb-4 py-4">
                Dział ochrony — obiekty przemysłowe i biurowe
              </p>
              <p className="border-b-1 mb-4 py-4">Elbest Hotele</p>
              <p className="">Przedszkola zakładowe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
