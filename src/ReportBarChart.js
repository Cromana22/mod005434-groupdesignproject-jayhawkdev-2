import './Reports.css';
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid } from 'recharts';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import React from 'react';

const ReportBarChart = (props) => {
    const { url, title } = props;
    let { response }  = useFetch(phpUrl+url);
    const data = [];

    if (response !== null) { 
        response.forEach(dataLine => {
            console.log(dataLine.xaxis);
            data.push(
                { name: dataLine.xaxis, value: dataLine.yaxis }
            );
        });
    };

    return (
        <div className='chart table-responsive'>
            <h1>{title}</h1>
            <BarChart
                width={500 }
                height={300}
                data={data}
                stackOffset="sign"
                barSize={30}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickMargin={0} interval={0} />
                <YAxis />
                <ReferenceLine y={0} stroke="#000" />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
                <Bar dataKey="value" fill="#1b1464" />
            </BarChart>
        </div>
    );
}

export default ReportBarChart;