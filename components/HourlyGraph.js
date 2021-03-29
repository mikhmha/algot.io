import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";




const formatDate = (tickItem) => {
    return new Date(tickItem * 1000).toLocaleTimeString("en-US");
}
  
  export default function Graph({data}) {
    return (
      <BarChart
        width={500}
        height={300}
        data={data.reverse()}
        barCategoryGap={1}


        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="eztime" tickFormatter={formatDate} padding={{ left: 0, right: 0 }} />
        <YAxis />
        <Tooltip />

        <ReferenceLine y={0} stroke="#000" />

        <Bar dataKey="delta" barSize={10} >
        {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.delta >= 0.0 ? "#03FC77" : "#f00"}  strokeWidth={index === 2 ? 4 : 1}/>
            ))
        }
        </Bar>

      </BarChart>
    );
  }