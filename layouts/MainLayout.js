import React, { useState } from 'react';
import Link from 'next/link';
import CardMenuResponsive from '../components/CardMenuResponsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const MainLayout = ({children}) => {

  const [responsive, setResponsive ] = useState(false);

  const viewMenu = () => {
    setResponsive(true);
    console.log(responsive);
  }

  const outMenu = () => {
    setResponsive(false);
    console.log(responsive);
  }

  return (
    <div className="main">

      <button className="menu-icon" onClick={ viewMenu }>
        <FontAwesomeIcon icon={faBars} />
      </button>


      { responsive ? <CardMenuResponsive resp={ outMenu } /> : null } 
        

      <header className="header">
        <div className="container-header">
          <div className="c-logo">
            <Link href="/">
              <a className="logo"> Comic Web </a>
            </Link>
          </div>
          
          <div className="options">
            <Link href="/characters">
              <a className="option"> Characters </a>
            </Link>
            
            <Link href="/comics">
              <a className="option"> Comics </a>
            </Link>
            
            <Link href="/series">
              <a className="option"> Series </a>
            </Link>
          </div>
        </div>
      </header> 
      
      {children}

    </div>
  );

}

export default MainLayout;