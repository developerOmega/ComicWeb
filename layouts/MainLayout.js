import React from 'react';
import Link from 'next/link';

const MainLayout = ({children}) => {
  return (
    <div className="main">
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