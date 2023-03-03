import React from 'react';
import Category from './Category';
import Pages from './pages/Pages';
import {BrowserRouter} from "react-router-dom";
import Search from './Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
    <Nav>
    <GiKnifeFork />
      <Logo to={"/"}>Foodbook</Logo>
    </Nav>
    <Search />
    <Category />
    <Pages/>
    </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
text-decoration: none;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: sans-serif, cursive;`;

  const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  };`;

export default App;
