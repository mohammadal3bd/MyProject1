/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const headerStyle = css`
  background-color: #343a40;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 8px;
`;

const navStyle = css`
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    padding: 10px 15px;
    border-radius: 4px;
    &:hover {
      background-color: #495057;
    }
  }
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1>Staff Search</h1>
      <nav css={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
