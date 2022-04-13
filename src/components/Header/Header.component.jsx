import React, { useContext } from 'react';
import { InfoContext } from '../../context/CallsContext';
import { ThemeContext } from '../../context/ThemeContext';
import { BsMoon, BsFillMoonFill } from 'react-icons/bs';
import './Header.styles.scss';

const Header = () => {
  const { info, setInfo } = useContext(InfoContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(info.calls);
  return (
    <header className='header'>
      <div>
        <a href='/'>Logo</a>
      </div>
      <div className='search-container'>
        <input type='text' placeholder='Search' />
      </div>
      <div className='link-container'>
        <a href='/calculator' className='link-item'>
          Calculator
        </a>

        {/* <h1>Number of calls: {info.calls}</h1> 
      <button onClick={() => setInfo({ calls: info.calls + 1 })}>
        add call
      </button>
      <button onClick={() => setInfo({ calls: null })}>Clear Calls</button>*/}
        <a href='/pools' className='link-item'>
          Pools
        </a>
        <a href='/hardware' className='link-item'>
          Hardware
        </a>
        <BsFillMoonFill onClick={toggleTheme} className='theme-button' />
      </div>
    </header>
  );
};
export default Header;
