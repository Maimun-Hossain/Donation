import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Cards = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then((res) => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className="py-20 max-w-7xl mx-auto grid grid-cols-4 gap-6">
            {
                items.map(item => <Card key={item.id} item={item}></Card>)
            }
        </div>
    );
};

export default Cards;