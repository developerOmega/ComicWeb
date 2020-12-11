import React from 'react';
import Link from 'next/link';

const MainLayout = ({children}) => {
  return (
    <>
      <header className="header">
        <Link href="/">
          <a className="logo"> Comic Web </a>
        </Link>
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
      </header> 
      
      {children}

    </>
  );

}

export default MainLayout;