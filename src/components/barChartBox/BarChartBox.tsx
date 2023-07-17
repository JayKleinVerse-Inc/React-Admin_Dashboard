import "./barChartBox.scss"
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';




type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
  };

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
     <h1>{props.title}</h1>
     <div className="chart">
     <ResponsiveContainer width="98%" height={150}>
        <BarChart width={150} height={40} data={props.chartData}>
        <Tooltip 
            contentStyle={{background:"lemon", borderRadius:"5px"}}
            labelStyle={{display: "none"}}
            cursor={{fill:"none"}}
            //position={{x: 10, y: 60}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
     </div>
    </div>
  )
}

export default BarChartBox
