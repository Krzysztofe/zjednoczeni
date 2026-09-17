import SideBorder from "./SideBorder";

type Props = {
  title: string;
  header: string;
  paragraph: string;
};

const TopSection = ({ title, header, paragraph }: Props) => {
  return (
    <section className="">
      <div className="container py-22">
        <div className="text-accent text-sm">{title}</div>
        <h1 className="text-2xl font-bold mb-5">{header}</h1>
        <p className="md:w-2/3">{paragraph}</p>
        <SideBorder />
      </div>
    </section>
  );
};

export default TopSection;
