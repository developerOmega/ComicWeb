import styles from './CardComic.module.scss';
import Image from 'next/image';


const CardComic = ( {comic} ) => {

  return (
    <div className={styles.container}>
      
      <div className={styles.mainImage}>
        <Image src={ comic.thumbnail.path + '.' + comic.thumbnail.extension } alt={ comic.title } layout="responsive" height="100%" width="100%" />
      </div>

      
      <div className={styles.name}>
        <b> Name: </b>
        <p> { comic.title } </p>
      </div>

      <div className={styles.description}>
        <b> Description: </b>
        <p> { comic.description } </p>
      </div>

    </div>
  );

}

export default CardComic;