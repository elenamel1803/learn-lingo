import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
import Navbar from 'components/Navbar/Navbar';
import { IconSvg } from '../../helpers/iconSvg.js';
import { BrandName, Header } from './Layout.styled.jsx';

const Layout = () => {
  return (
    <>
      <Header>
        <NavLink to="/">
          <IconSvg id="icon-ukraine" width="28" height="28" />
          <BrandName>LearnLingo</BrandName>
        </NavLink>
        <Navbar />
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
