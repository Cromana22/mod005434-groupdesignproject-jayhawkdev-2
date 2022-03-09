import NavBar from './NavBar';

const Reports = (props) => {
    const {basketCount} = props;

    return (
        <div>
            <NavBar title='Reports' basketCount={basketCount} />
        </div>
    );
}

export default Reports;