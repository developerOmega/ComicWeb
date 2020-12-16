import styles from './CardComic.module.scss';
import Image from 'next/image';


const CardComic = ( {comic} ) => {

  return (
    <div className={styles.container}>
      
      <div className={styles.mainImage}>
        <Image src={ data.thumbnail.path + '.' + data.thumbnail.extension } alt={ data.title } layout="responsive" height="100%" width="100%" />
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