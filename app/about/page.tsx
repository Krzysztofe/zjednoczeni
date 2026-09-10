import SideBorder from "@/components/shared/SideBorder";

const AboutPage = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="text-accent text-sm">O związku</div>
          <h1 className="text-2xl font-bold mb-5">
            Powstaliśmy tam, gdzie nikt inny nie chciał działać
          </h1>
          <p className="w-2/3">
            MZZP Zjednoczeni to międzyzakładowy związek zawodowy skupiający
            pracowników spółki Elbest - ochroniarzy, personel hotelowy oraz
            pracowników przedszkoli zakładowych. Działamy niezależnie od
            pracodawcy i ponad podziałami stanowiskowymi.
          </p>
          <SideBorder />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default AboutPage;
