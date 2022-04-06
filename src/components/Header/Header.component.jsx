import React, { useContext } from 'react';
import { InfoContext } from '../CallsContext';
import './Header.styles.scss';

const Header = () => {
  const { info, setInfo } = useContext(InfoContext);
  console.log(info.calls);
  return (
    <header className='header'>
      <a href='/'>Home</a>
      {/* <h1>Number of calls: {info.calls}</h1> 
      <button onClick={() => setInfo({ calls: info.calls + 1 })}>
        add call
      </button>
      <button onClick={() => setInfo({ calls: null })}>Clear Calls</button>*/}
      <a href='/pools'>Pools</a>
    </header>
  );
};
export default Header;
