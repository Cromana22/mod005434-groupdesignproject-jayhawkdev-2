import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import ProductTableRow from './ProductTableRow';

const Products = (props) => {
    const { basketCount } = props;

    let rows = [];
    let rowCount = 1;
    let { response }  = useFetch(phpUrl+'/productTable.php');
  
    if (response !== null) { 
        response.forEach(product => {
        rows.push(
            <ProductTableRow key={rowCount} details={product} rowCount={rowCount} />
        );
        rowCount++;
        });
    };

    return (
        <div className="products">
            <NavBar title='Products' basketCount={basketCount} />
            <div className="productstable table-responsive">
                <table id='products-table'>
                    <thead>
                        <tr className='products-tr'>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Quantity Available</th>
                            <th>Reorder Level</th>
                            <th>Stock Status</th>
                            <th>Quantity To Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Products;