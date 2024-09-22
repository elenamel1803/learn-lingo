import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin: 20px 128px;
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const BrandName = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
`;
