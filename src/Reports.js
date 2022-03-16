import './Reports.css';
import NavBar from './NavBar';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = (props) => {
    const { basketCount } = props;

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 600 },
        { name: 'Group C', value: 400 },
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <NavBar title='Reports' basketCount={basketCount} />
            <div className='chart table-responsive'>
                <h1>Lates Orders</h1>
                
                    <PieChart width={500} height={500}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            outerRadius={125}
                            fill="#1b1464"
                            label
                        />
                        <Tooltip />
                    </PieChart>
            </div>
        </div>
    );
}

export default Reports;