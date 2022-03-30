import NavBar from './NavBar';
import useFetch from './php/useFetch';
import phpUrl from './php/phpUrls';
import ProductTableRow from './ProductTableRow';
import webUrl from './php/webUrls';

const Products = (props) => {
    const { basketCount, loggedin, accessLevel, productTypes } = props;
    if (loggedin !== 'Y') { window.location.replace(webUrl)};

    let rows = [];
    let rowCount = 1;
    let { response }  = useFetch(phpUrl+'/productTable.php');
  
    if (response !== null) { 
        response.forEach(product => {
        rows.push(
            <ProductTableRow key={rowCount} details={product} rowCount={rowCount} accessLevel={accessLevel} productTypes={productTypes} />
        );
        rowCount++;
        });
    };

    return (
        <div className="products">
            <NavBar title='Products' basketCount={basketCount} accessLevel={accessLevel} />
            <div className="productstable table-responsive">
                <table id='products-table'>
                    <thead>
                        <tr className='products-tr'>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Quantity Available</th>
                            <th>Reorder Level</th>
                            <th>Stock Status</th>
                            {
                                accessLevel !== "Finance" && 
                                <th>Order</th>
                            }
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