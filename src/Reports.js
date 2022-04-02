import './Reports.css';
import NavBar from './NavBar';
import ReportPieChart from './ReportPieChart';
import ReportBarChart from './ReportBarChart'; 
import ReportLineChart from './ReportLineChart';
import webUrl from './php/webUrls';

const Reports = (props) => {
    const { basketCount, loggedin, accessLevel } = props;
    if (loggedin !== 'Y') { window.location.replace(webUrl)};
    console.log(accessLevel)
    if (accessLevel !== "Manager") {
        if (accessLevel !== "Finance") { window.location.replace(webUrl+'/products')};
    }
  
    return (
        <div style={{ textAlign: "center" }}>
            <NavBar title='Reports' basketCount={basketCount} accessLevel={accessLevel} />
            <div className='chart table-responsive'>
                <div id='pie-chart'>
                <ReportPieChart  url="/reportProdStatus.php" title="Stock Levels" />
                <ReportPieChart url="/reportProdTypeOrders.php" title="Orders by Product Type" />
                <ReportPieChart url="/reportProdOrders.php" title="Orders by Product" />
                </div>
                <br/>
                <div id='line-bar-chart'>
                <ReportBarChart url="/reportPoPerPerson.php" title="Purchase Orders Per Person" />
                <ReportLineChart url="/reportWeeklyOrders.php" title="Weekly Order Totals Per Supplier" />
                <ReportLineChart url="/reportMonthlyOrders.php" title="Monthly Order Totals Per Supplier" />
                </div>
            </div>
        </div>
    );
}

export default Reports;