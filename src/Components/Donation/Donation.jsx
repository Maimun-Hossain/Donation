import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("test"));
    if (donation) {
      setDonations(donation);
      const total = donation.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      setTotalPrice(total)
    } else {
      setNoFound("No items found");
    }
  }, []);

  return (
    <div>
        <div>
            <h2>total : {totalPrice}</h2>
        </div>
      {noFound ? (
        <p className="justify-center flex h-[80vh] items-center text-2xl font-bold">
          {noFound}
        </p>
      ) : (
        <div className="grid grid-cols-2 max-w-7xl mx-auto gap-6 mt-20 mb-10">
          {
            isShow ? donations.map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              )) : donations.slice(0,4).map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              ))
          }
        </div>
      )}
      <div className={isShow === true && 'hidden'}>
        <button onClick={()=>setIsShow(!isShow)} className="btn text-white mx-auto bg-[#009444] flex">See All</button>
      </div>
    </div>
  );
};

export default Donation;
