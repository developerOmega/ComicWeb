import styles from './CardComic.module.scss';

const CardComic = ( {comic} ) => {

  return (
    <div className={styles.container}>
      
      <img className="mainImg" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} width="100px" />
      
      <div className="section1">
        <b> Name: </b>
        <p> { comic.title } </p>
      </div>

      <div className="section2">
        <b> Description: </b>
        <p> { comic.description } </p>
      </div>

    </div>
  );

}

export default CardComic;