import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
    const datas = useLoaderData()
    const [total, setTotal] = useState([])
    useEffect(()=>{
        

    },[])
    console.log(total)
    const data = [
        { name: 'Group A', value: 66.7 },
        { name: 'Group B', value: 33.3 },
      ];
      const COLORS = ['#FF444A', '#00C49F'];
      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className="text-3xl font-bold" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};
    return (
        <div>
            
        <PieChart width={1600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="flex justify-center gap-20">
            <div className="flex justify-center"><h1 className="text-lg font-bold mr-2">Your Donation</h1>
            <span className="px-14 bg-[#00C49F] rounded-full"></span>
            </div>
            <div className="flex justify-center">
            <h1 className="font-bold mr-2 text-lg">Your Donation</h1>
            <span className="px-14 bg-[#FF444A] rounded-full"></span>
            </div>
        </div>
        </div>
    );
};

export default Statistics;