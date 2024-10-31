import { Outlet } from 'react-router-dom';
import Fotter from '../../shared/fotter/footer';
import Header from '../../shared/header/header';
import './layout.scss';

function Layout() {
  return (
    <div className="layout">
        <Header />
        <div className="body">
            <Outlet />
        </div>
        <Fotter />
    </div>
  );
}

export default Layout;