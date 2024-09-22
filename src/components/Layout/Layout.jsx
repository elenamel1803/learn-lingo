import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
import Navbar from 'components/Navbar/Navbar';
import { IconSvg } from '../../helpers/iconSvg.js';
import { BrandName, Header, LogoLink } from './Layout.styled.jsx';
import AuthMenu from 'components/AuthMenu/AuthMenu.jsx';

const Layout = () => {
  return (
    <>
      <Header>
        <LogoLink to="/">
          <IconSvg id="icon-ukraine" width="28" height="28" />
          <BrandName>LearnLingo</BrandName>
        </LogoLink>
        <Navbar />
        <AuthMenu />
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
