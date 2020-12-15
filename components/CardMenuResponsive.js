import { useState } from 'react';
import styles from './CardMenuResponsive.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CardMenuResponsive = ({resp}) => {
  const [exit, setExit] = useState(false);

  const classIndex = exit ?  styles.animationInRight : styles.animationInLeft;

  const exitMenu = () => {
    setExit(true);
    setTimeout(() => resp(), 460);
  }

  return (
    <section className={styles.index + ' ' + classIndex} >

      <button className={styles.iconDelete}> <FontAwesomeIcon icon={faTimes} onClick={ exitMenu }  /> </button>

      <h1 className={styles.titleIndex}> Comic Web </h1>

      <div className={styles.opt}>
        <Link href='/characters'>
          <a className={styles.linkIndex} onClick={ exitMenu } >Characters</a>
        </Link>
      </div>

      <div className={styles.opt}>
        <Link href='/comics'>
          <a className={styles.linkIndex} onClick={ exitMenu } > Comics </a>
        </Link>
      </div>

      <div className={styles.opt}>
        <Link href='/series'>
          <a className={styles.linkIndex} onClick={ exitMenu } > Series </a>
        </Link>
      </div>
    </section>
  );
}

export default CardMenuResponsive;

