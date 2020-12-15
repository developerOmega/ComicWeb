import { useState } from 'react';
import styles from './CardMenuResponsive.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CardMenuResponsive = ({resp}) => {

  return (
    <section className={ styles.index } >

      <button className={styles.iconDelete}> <FontAwesomeIcon icon={faTimes} onClick={ resp }  /> </button>

      <h1 className={styles.titleIndex}> Comic Web </h1>

      <div className={styles.opt}>
        <Link href='/characters'>
          <a className={styles.linkIndex}>Characters</a>
        </Link>
      </div>

      <div className={styles.opt}>
        <Link href='/comics'>
          <a className={styles.linkIndex}> Comics </a>
        </Link>
      </div>

      <div className={styles.opt}>
        <Link href='/series'>
          <a className={styles.linkIndex}> Series </a>
        </Link>
      </div>
    </section>
  );
}

export default CardMenuResponsive;

