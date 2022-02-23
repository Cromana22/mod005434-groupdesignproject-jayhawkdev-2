import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <div className="Layout">
            <Outlet />
        </div>
    );
}
export default Layout;
