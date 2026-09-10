import ButtonLink from "@/components/shared/buttons/ButtonLink";
import TopSection from "@/components/shared/TopSection";

const ContactPage = () => {
  return (
    <>
      <TopSection
        title="Kontakt"
        header="Napisz albo zadzwoń"
        paragraph="Odpowiadamy zwykle w ciągu 1–2 dni roboczych."
      />

      <section>
        {" "}
        <div className="container grid gap-10 mb-30">
          <div>
            <div className="pb-3 text-accent">TELEFON</div>
            <div>733 654 323</div>
          </div>
          <div>
            <div className="pb-3 text-accent">E-MAil</div>
            <div>zzpelbest@gmail.com</div>
          </div>
          <div>
            <div className="pb-3 text-accent">ADRES</div>
            <div>733 654 323</div>
          </div>
          <div>
            <div className="pb-3 text-accent">MEDIA SPOŁECZNOŚCIOWE</div>
            <ButtonLink
              link="https://www.facebook.com/MzzpZjednoczeni"
              className="w-fit"
            >
              {" "}
              Facebook: MZZP Zjednoczeni
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
