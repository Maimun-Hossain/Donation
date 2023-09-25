import { Typography } from "@material-tailwind/react";
import swal from "sweetalert";

const DataCard = ({ data }) => {

  const { title, picture, description, price, id, textColor } = data || {}

  const cardTextColor = {
    backgroundColor: textColor,
  };

  const handleDonation = () => {

    const addedData = [];

    const cardData = JSON.parse(localStorage.getItem('test'))
    if(!cardData){
        addedData.push(data)
        localStorage.setItem('test',JSON.stringify(addedData))
        swal("Thank you!", "You have donated", "success");
    }
    else{
        const ifExits = cardData.find(data => data.id == id)

        if(!ifExits){
            addedData.push(...cardData,data)
            localStorage.setItem('test',JSON.stringify(addedData))
            swal("Thank you!", "You have donated", "success");
        }
        else{
            swal("Error!", "You already donated", "error");
        }
    }

    // localStorage.setItem('test',JSON.stringify([{name: 'monu'},{name: 'coke'}]))
  }
  return (
    <div className="max-w-7xl mx-auto mt-16">
       <figure className="relative w-full">
      <img
        className="max-h-[80vh] w-full rounded-xl object-cover object-center"
        src={picture}
        alt="nature image"
      />
      <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 rounded-b-xl bg-black/50 py-10 px-10">
        <div>
          <Typography variant="h5" color="blue-gray">
            <button style={cardTextColor} onClick={handleDonation} className="btn  rounded-sm border-none text-white">Donate ${price}</button>
          </Typography>
        </div>
      </figcaption>
    </figure>
    <div>
        <h1 className="text-5xl font-bold mt-10 mb-5">{title}</h1>
        <p className="mb-10">{description}</p>
    </div>
    </div>
  );
};

export default DataCard;
