import { Link } from "react-router-dom";


const DonationCard = ({ data }) => {
  const { title, picture, category, price, textColor, cardColor, categoryColor, id} = data || {};

  const buttonBg = {
    backgroundColor: textColor,
  };
  const cardBg = {
    backgroundColor: cardColor,
  };
  const categoryStyle = {
    color: textColor,
    backgroundColor: categoryColor
  };
  const fontColor = {
    color: textColor,
  };
  return (
    <div>
      <div style={cardBg} className="relative flex flex-row rounded-xl">
        <div className="relative m-0 w-56 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="object-cover rounded-r-none h-52"
          />
        </div>
        <div className="p-6">
          <button style={categoryStyle} className="px-3 text-sm font-semibold rounded-sm mb-2">{category}</button>
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <h2 style={fontColor} className="mb-4 font-semibold text-lg">${price}</h2>
          <Link to={`/data/${id}`}><button style={buttonBg} className="py-2 px-4 rounded-sm font-semibold text-lg text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
