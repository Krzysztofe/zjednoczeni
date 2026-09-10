import SideBorder from "./SideBorder";

type Props = {
  title: string;
  header: string;
  paragraph: string;
};

const TopSection = ({ title, header, paragraph }: Props) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-accent text-sm">{title}</div>
        <h1 className="text-2xl font-bold mb-5">{header}</h1>
        <p className="w-2/3">{paragraph}</p>
        <SideBorder />
      </div>
    </section>
  );
};

export default TopSection;
