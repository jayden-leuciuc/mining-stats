import React, { useContext, useState, useEffect } from 'react';
import { InfoContext } from '../../context/CallsContext';
import { BsMoon, BsFillMoonFill } from 'react-icons/bs';
import './Header.styles.scss';
import { setTheme } from '../themes';
import logo from '../images/logo.png';

const Header = () => {
  const { info, setInfo } = useContext(InfoContext);
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem('theme');

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setTogClass('light');
    } else {
      setTheme('theme-dark');
      setTogClass('dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogClass('dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTogClass('light');
    }
  }, [theme]);

  return (
    <header className='header'>
      <div>
        <a href='/'>
          <img src={logo} alt='Logo' />
        </a>
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
        <BsFillMoonFill onClick={handleOnClick} className='theme-button' />
      </div>
    </header>
  );
};
export default Header;
