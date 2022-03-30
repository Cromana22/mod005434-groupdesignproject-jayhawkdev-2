import './Reports.css';
import NavBar from './NavBar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area, } from 'recharts';
import ReportPieChart from './ReportPieChart';
import ReportBarChart from './ReportBarChart'; 
import ReportLineChart from './ReportLineChart';

const Reports = (props) => {
    const { basketCount } = props;

    const data3 = [
        {
            name: 'Page A',
            uv: 4000,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div style={{ textAlign: "center" }}>
            <NavBar title='Reports' basketCount={basketCount} />
            <div className='chart table-responsive'>
                <ReportPieChart url="/reportProdStatus.php" title="Stock Levels" />
                <ReportPieChart url="/reportProdTypeOrders.php" title="Orders by Product Type" />
                <ReportPieChart url="/reportProdOrders.php" title="Orders by Product" />
                <ReportBarChart url="/reportPoPerPerson.php" title="Purchase Orders Per Person" />
                <ReportLineChart url="/reportWeeklyOrders.php" title="Weekly Order Totals Per Supplier" />
                <ReportLineChart url="/reportMonthlyOrders.php" title="Monthly Order Totals Per Supplier" />
            </div>
        </div>
    );
}

export default Reports;