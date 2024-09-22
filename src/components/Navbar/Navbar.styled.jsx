import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121417;

  &.active {
    color: var(--button);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 28px;
`;
