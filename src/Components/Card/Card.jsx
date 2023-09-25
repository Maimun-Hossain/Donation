import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { picture, title, category, id, cardColor, categoryColor, textColor } = item || {}
  const cardBg = {
    backgroundColor: cardColor,
  };
  const cardCategoryBg = {
    backgroundColor: categoryColor,
  };
  const cardTextColor = {
    color: textColor,
  };
  const categoryStyle = {
    ...cardCategoryBg,
    ...cardTextColor,
  };
  const card = <>
  <div  style={cardBg}  className="card rounded-md">
        <figure>
          <img className="w-full object-cover" src={picture} alt="picture" />
        </figure>
        <div className="p-5">
          <button style={categoryStyle} className="px-3 mb-3 rounded-sm font-semibold">{category}</button>
          <h2 style={cardTextColor} className="card-title">{title}</h2>
        </div>
      </div>
  </>
  return (
    <div>
      <Link to={`/data/${id}`}>{card}</Link>
    </div>
  );
};

export default Card;
