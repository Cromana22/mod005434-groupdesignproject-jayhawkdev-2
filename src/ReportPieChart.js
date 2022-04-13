import './Reports.css';
import { PieChart, Pie, Tooltip } from 'recharts';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';

const ReportPieChart = (props) => {
    const { url, title } = props;
    let { response }  = useFetch(phpUrl+url);
    const data = [];

    if (response !== null) { 
        response.forEach(dataLine => {
            data.push(
                { name: dataLine.pieSection, value: dataLine.count, fill: dataLine.colour }
            );
        });
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="chartContainer">
            <h2>{title}</h2>
            <PieChart width={500} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    outerRadius={155}
                    fill={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                />
                <Tooltip />
            </PieChart>
        </div>
    );
}

export default ReportPieChart;