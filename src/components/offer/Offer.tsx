type OfferProps = {
  title: string;
  description: string;
  cover: string;
  direction: string;
};

import "./offer.css";

const Offer = ({ title, description, cover, direction }: OfferProps) => {
  return (
    <section className={`offer  ${direction === "right" && "offer--reverse"} `}>
      <div className="offer__info">
        <h1 className="offer__title">{title}</h1>
        <p className="offer__des"> {description}</p>
      </div>
      <img className="offer__img" src={cover} alt={title} />
    </section>
  );
};

export default Offer;
