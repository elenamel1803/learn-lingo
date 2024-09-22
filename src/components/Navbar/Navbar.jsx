import { Link, List } from './Navbar.styled';

const Navbar = () => {
  return (
    <>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teachers">Teachers</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </List>
    </>
  );
};

export default Navbar;
