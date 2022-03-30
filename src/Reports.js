import './Reports.css';
import NavBar from './NavBar';
import ReportPieChart from './ReportPieChart';
import ReportBarChart from './ReportBarChart'; 
import ReportLineChart from './ReportLineChart';

const Reports = (props) => {
    const { basketCount } = props;

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