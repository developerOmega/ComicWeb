import styles from './CardComic.module.scss';

const CardComic = ( {comic} ) => {

  return (
    <div className={styles.container}>
      
      <div className={styles.mainImage}>
        <img  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} width="100px" />
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