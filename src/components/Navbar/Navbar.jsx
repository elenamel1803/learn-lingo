import { Link, List } from './Navbar.styled';

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
