import React, { useState } from 'react';
import Link from 'next/link';
import CardMenuResponsive from '../components/CardMenuResponsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Fb from '../src/icons/Fb';
import Ln from '../src/icons/Ln';
import Gh from '../src/icons/Gh';

const MainLayout = ({children}) => {

  const [responsive, setResponsive ] = useState(false);

  const viewMenu = () => {
    setResponsive(true);
  }

  const outMenu = () => {
    setResponsive(false);
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

      <footer className="footer">
        <div className="name" >
          Daniel Mendoza - theskip98@gmail.com  
        </div>
        <div className="networks">

          <div>
            <a target="_blank" href="https://www.facebook.com/developerOmega" className="network"> <Fb /> </a>
          </div>

          <div>
            <a target="_blank" href="https://www.linkedin.com/in/daniel-mendoza-99b592172/" className="network"> <Ln /> </a>
          </div>

          <div>
            <a target="_blank" href="https://github.com/developerOmega" className="network"> <Gh /> </a>
          </div>

        </div>
      </footer>

    </div>
  );

}

export default MainLayout;