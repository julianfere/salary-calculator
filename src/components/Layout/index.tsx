import { Outlet } from 'react-router-dom';
import { Sidebar } from 'components';
import './styles.css';

const Layout = () => {
    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    )
}

export default Layout