import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['rgba(255,68,74,1)', 'rgba(0,196,159,1)'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * .5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text x={x} y={y} fill="white" className={`${percent>0 ? '': 'hidden'}`} fontSize={18} fontWeight={700} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
         {`${(percent * 100).toFixed(1)}%`}
      </text>
   );
};
const StatisticsPiChart = ({ totalDonatedData, allDonationData }) => {
   const data = [
      { name: 'Total Donation', value: allDonationData - totalDonatedData  },
      { name: 'Your Donation', value: totalDonatedData },
   ];
   return (
      <>
         <PieChart width={300} height={300} >
            <Pie
               data={data}
               cx={143}
               cy={143}
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={130}
               fill="#8884d8"
               dataKey="value"
            >
               {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               ))}
            </Pie>
         </PieChart>
      </>
   );
};

StatisticsPiChart.propTypes = {
   totalDonatedData: PropTypes.number,
   allDonationData: PropTypes.number
};

export default StatisticsPiChart;