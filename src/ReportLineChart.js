import './Reports.css';
import NavBar from './NavBar';
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area, } from 'recharts';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import React from 'react';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const ReportLineChart = (props) => {
    const { url, title } = props;
    let { response }  = useFetch(phpUrl+url);
    let data = [];
    let lines = [];

    if (response !== null) {
        //get unique dates
        let dateArray = [];
        response.forEach(dataline => {
            dateArray.push(dataline.xaxis);
        });
        dateArray = dateArray.filter(onlyUnique);

        for (let i=0; i<dateArray.length; i++) {
            let dataSegment = []
            dataSegment['xaxis'] = dateArray[i];

            response.forEach(dataline => {
                let datalinename = dataline.line;
                let datalinevalue = Number(dataline.yaxis);
                
                if (dataline.xaxis == dateArray[i]) {
                    dataSegment[datalinename] = datalinevalue;
                }
                else if (dataSegment[datalinename] == null) {
                    dataSegment[datalinename] = 0;
                }
            });

            data.push(dataSegment);
        }

        //get unique suppliers
        let supplierArray = [];
        response.forEach(dataline => {
            supplierArray.push(dataline.line);
        });
        supplierArray = supplierArray.filter(onlyUnique);
        let supplierCount = 0;

        supplierArray.forEach(supplier => {
            const colours = ["#2c03fc", "#216b36", "#731aab", "#782b23", "#bf942e"];
            lines.push(
                <Line key={supplier} type="monotone" dataKey={supplier} stroke={colours[supplierCount]} />
            )
            supplierCount++;
        })
    };

    return (
        <div className='chartContainer'>
            <h1>{title}</h1>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="xaxis" />
                <YAxis />
                <Tooltip />
                <Legend />
                {lines}
            </LineChart>
        </div>
    );
}

export default ReportLineChart;