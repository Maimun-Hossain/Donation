import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DataCard from "../DataCard/DataCard";

const CardDis = () => {
    const [data, setData] = useState([])

    const {id} = useParams()

    const datas = useLoaderData()

    useEffect(()=>{
        const loadData = datas.find(phone =>phone.id == id)
        setData(loadData)
    },[id, datas])
    return (
        <div>
            <DataCard data={data}></DataCard>
        </div>
    );
};

export default CardDis;