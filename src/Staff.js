import './Staff.css';
import NavBar from './NavBar';

const Staff = (props) => {
  const { basketCount } = props;

  return (
    <div className="staff">
      <NavBar title='Staff' basketCount={basketCount} />
      <div className="Stafftable">
        <table id='Staff-table'>
          <thead>
            <tr className='Staff-tr'>
              <th>Name</th>
              <th>Job Title</th>
              <th>Store</th>
              <th>Department</th>
              <th>Product Permissions</th>
              <th>Permission Level</th>
            </tr>
          </thead>
          <tbody>
            <tr id='1' className='Staff-tr'>
              <td>#QB123456</td>
              <td>Sales Assistant</td>
              <td>Peterborough</td>
              <td>Sales</td>
              <td>Toys</td>
              <td>Sales</td>
            </tr>

            <tr id='2' className='Staff-tr'>
              <td>#AC789006</td>
              <td>Sales Assistant</td>
              <td>Peterborough</td>
              <td>Sales</td>
              <td>Toys, Gadgets</td>
              <td>Senior</td>
            </tr>

            <tr id='3' className='Staff-tr'>
              <td>#TY122156</td>
              <td>Sales Assistant</td>
              <td>Peterborough</td>
              <td>Sales</td>
              <td></td>
              <td>Sales</td>
            </tr>

            <tr id='4' className='Staff-tr'>
              <td>#TY122156</td>
              <td>Sales Assistant</td>
              <td>Peterborough</td>
              <td>Sales</td>
              <td>Toys</td>
              <td>Sales</td>
            </tr>

            <tr id='5' className='Staff-tr'>
              <td>#TY122156</td>
              <td>Sales Assistant</td>
              <td>Peterborough</td>
              <td>Sales</td>
              <td>Gadgets</td>
              <td>Senior</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staff;
